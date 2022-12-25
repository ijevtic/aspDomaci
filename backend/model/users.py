from flask_restful import reqparse, Resource
from flask import request
from model.security import auth_check
from constants import AUTH_FAILED_CODE
from model.parsers import create_user_parser

class USERS(Resource):

  def __init__(self, db):
    self.db = db

  def get(self):
    # data = proba.parse_args()
    return {"email": "lol"}, 200

  def post(self):
    data = create_user_parser.parse_args()

    if not auth_check(data['email'], request.headers.get('Authorization')):
      return {"message": "Auth failed"}, AUTH_FAILED_CODE

    if (get_user(data['email'],self.db) is not None):
      return {"message": "User already exists!"}, 400
    
    return {"message": "ok"},200
    # return put_user(data,self.db)


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