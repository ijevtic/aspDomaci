from flask_restful import reqparse, Resource
from flask import request
from model.users import get_user
from container_manager import start_container_cycle
from generate_code import generate_code
from model.security import check_token
from random import randint

class TASKS(Resource):

  def __init__(self, db):
    self.db = db

  def get(self):
    if not check_token(request.headers.get('Authorization')):
      return {"message": "Auth failed"}, 400
    
    user_email = request.args.get('email').lower()
    if (get_user(user_email,self.db) is None):
      return {"message": "User doesn't exist!"}, 400
    
    return get_tasks(user_email, self.db)

  def post(self):
    # if not check_token(request.headers.get('Authorization')):
      # return {"message": "Auth failed"}, 400
    
    parser = reqparse.RequestParser()
    parser.add_argument('email', type=str)
    parser.add_argument('task_id', type=str)
    parser.add_argument('task_code', type=str)
    data = parser.parse_args()
    print(data, "data")

    # if (get_user(data['email'],self.db) is None):
    #   return {"message": "User doesn't exist!"}, 400
    
    id = randint(1,10000000)
    generate_code(id, data['task_code'])
    start_container_cycle(id)
    #read the container output
    data['task_ok'] = "ok"

    return put_task(data,self.db)


def get_tasks(email,db):
  row = {"task1":None, "task2":None, "task3":None}
  if db.tasks:
    task_cursor = db.tasks.find({"email":email})
    for task in task_cursor:
      row[task["task_id"]] = {'task_code':task['task_code'], 'task_ok':task['task_ok']}
  print(row)
  return row, 200

# task_ok: ok,wa,unknown
def put_task(data, db):
  # if db.tasks.find_one({"email": data['email'], "task_id": data['task_id']}):
  #   db.tasks.update_one({"email": data['email'], "task_id": data['task_id']},
  #                       { "$set": { 'task_code': data['task_code'], 'task_ok':data['task_ok'] }})
  #   return {"message": "task succesfully updated!"}, 201

  print(db)
  row = data
  db.tasks.insert_one(row)
  return {"message": "task succesfully added!"}, 201