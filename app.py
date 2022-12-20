from flask import Flask, request, jsonify
from flask_restful import reqparse, abort, Api, Resource
import os
from dotenv import load_dotenv
from flask_cors import CORS
from pymongo import MongoClient
import json
from apscheduler.schedulers.background import BackgroundScheduler

load_dotenv()

app = Flask(__name__)
CORS(app)
api = Api(app)
pending_filters = dict()

db = None

def get_user(email,db):
  if not db.users:
    return None
  user = db.users.find_one({"email":email})
  return user

def put_user(data,db):
  row = dict()
  row["email"] = data["email"]
  row["first_name"] = data["first_name"]
  row["last_name"] = data["last_name"]
  db.users.insert_one(row)
  return {"message": "User succesfully created!"}, 201

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
  if db.tasks.find_one({"email": data['email'], "task_id": data['task_id']}):
    db.tasks.update_one({"email": data['email'], "task_id": data['task_id']},
                        { "$set": { 'task_code': data['task_code'], 'task_ok':data['task_ok'] }})
    return {"message": "task succesfully updated!"}, 201

  row = data
  db.tasks.insert_one(row)
  return {"message": "task succesfully added!"}, 201


class USERS(Resource):

  def get(self):

    # wallet_number = request.args.get('wallet_number').lower()
    return {"message": "get request"}, 200

  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument('email', type=str, required=True, help="Email is empty!")
    parser.add_argument('first_name', type=str, required=True, help="First name is empty!")
    parser.add_argument('last_name', type=str, required=True, help="Last name is empty!")
    data = parser.parse_args()
    print(data, "data")

    if (get_user(data['email'],db) is not None):
      return {"message": "User already exists!"}, 400
    
    return put_user(data,db)

class TASKS(Resource):
  def get(self):

    user_email = request.args.get('email').lower()
    if (get_user(user_email,db) is None):
      return {"message": "User doesn't exist!"}, 400
    
    return get_tasks(user_email, db)

  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument('email', type=str)
    parser.add_argument('task_id', type=str)
    parser.add_argument('task_code', type=str)
    data = parser.parse_args()
    # print(data, "data")

    if (get_user(data['email'],db) is None):
      return {"message": "User doesn't exist!"}, 400
    
    #TODO
    data['task_ok'] = "ok"

    return put_task(data,db)

api.add_resource(USERS, '/users', endpoint="users")
api.add_resource(TASKS, '/tasks', endpoint="tasks")

def update_pending():
  print('update')

def get_database():
  CONNECTION_STRING = os.getenv('CONNECTION_STRING')
  client = MongoClient(CONNECTION_STRING)
  return client[os.getenv('DATABASE_NAME')]


if __name__ == '__main__':
  db = get_database()

  # compile()
  # serve(app, host="0.0.0.0", port=5000)

  scheduler = BackgroundScheduler()
  # scheduler.add_job(lambda: update_pending(), trigger="interval", seconds=25)
  # scheduler.start()

  app.run(debug=True,host='0.0.0.0',port=int(os.environ.get('PORT', 5000)))

  # app.run(use_reloader=False)