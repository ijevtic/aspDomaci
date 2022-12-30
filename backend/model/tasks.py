from flask_restful import Resource
from flask import request
from model.users import get_user
from container_manager import start_container_cycle
from generate_code import generate_code
from model.security import auth_check
from constants import AUTH_FAILED_CODE, SUBMISSION_TIMEOUT, empty_tasks, maximum_code_size
from model.parsers import create_task_parser
import time
import copy
from grade import grade
from random import randint

def time_now():
  return int(time.time())

class TASKS(Resource):

  def __init__(self, db):
    self.db = db

  def get(self):
    user_email = request.args.get('email')
    if user_email is None:
      return {"message": "wrong email!",
              "auth": None,
              "user": None}, 403
    
    if not auth_check(user_email, request.headers.get('Authorization')):
      return {"message": "Auth failed",
              "auth": None,
              "user": None}, AUTH_FAILED_CODE
    
    if (get_user(user_email,self.db) is None):
      return {"message": "User doesn't exist!",
              "auth": True,
              "user": None}, 401
    
    return get_tasks(user_email, self.db)

  def post(self):

    data = create_task_parser.parse_args()
    print(data, "data")

    if not auth_check(data['email'], request.headers.get('Authorization')):
      return {"message": "Auth failed",
              "auth": None}, AUTH_FAILED_CODE
    
    user = get_user(data['email'],self.db)
    if (user is None):
      return {"message": "User doesn't exist!",
              "auth": True,
              "user": None}, 401
    
    if(user['time'] + SUBMISSION_TIMEOUT > time_now()):
      return {"message": "Timeout has not passed!",
              "auth": True,
              "user": True,
              "timeout": True}, 401
    
    if(len(data['task_code']) > maximum_code_size):
      return {"message": "Souce code too large!",
              "auth": True,
              "user": True,
              "timeout": True}, 401
    
    
    # if (get_user(data['email'],self.db) is None):
    #   return {"message": "User doesn't exist!"}, 400
    
    id = randint(1,10000000)
    data['id'] = id
    print("id ", id)
    generate_code(id, data['task_code'])
    start_container_cycle(id, data['task_id'])
    data = grade(data, id, data['task_id'])

    return put_task(data,self.db)
    # return {'id':id,'status':data['status'],'passed':data['passed'],'test_cases_num':data['test_cases_num'],'error':data['error']}, 200


def get_tasks(email,db):
  row = copy.deepcopy(empty_tasks)
  if db.tasks is not None:
    task_cursor = db.tasks.find({"email":email})
    for task in task_cursor:
      row["task1"][task["task_id"]].append(copy_task(task))
  return {"tasks":row,
          "auth":True,
          "user":True}, 200

#data je vec popunjen task(bez vremena)
def put_task(data, db):
  current_time = time_now()
  data['time'] = current_time
  return_task = copy.deepcopy(data)
  db.tasks.insert_one(data)
  print(data['email'], current_time)
  db.users.update_one({"email": data['email']}, { "$set": { 'time': current_time }})
  return {"message": "task succesfully submitted!",
          "auth": True,
          "user": True,
          "timeout": None,
          "task": return_task}, 201


def copy_task(object):
  arguments = ['task_code', 'id', 'test_cases_num', 'passed', 'error', 'status', 'time', 'task_id']
  ret = dict()
  for arg in arguments:
    ret[arg] = object[arg]
  return ret

def mock_task(email, task_id, task_code):
  return {
    "email": email,
    "task_id": task_id,
    "task_code": task_code,
    "id": 1,
    "test_cases_num": 4,
    "passed": 3,
    "error": "no error",
    "status": "OK",
  }
