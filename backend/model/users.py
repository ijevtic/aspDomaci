from flask_restful import reqparse, Resource
from flask import request
from model.security import auth_check, check_token
from constants import AUTH_FAILED_CODE

class USERS(Resource):

  def __init__(self, db):
    self.db = db

  def get(self):
    # data = proba.parse_args()
    return {"email": "lol"}, 200

  def post(self):
    email = check_token(request.headers.get('Authorization'))
    if email is None:
      return {"message": "Auth failed",
              "auth": None,
              "user": None}, AUTH_FAILED_CODE

    if (get_user(email,self.db) is not None):
      return {"message": "User already exists!",
              "auth": True,
              "user": None}, 400
    
    return put_user(email,self.db)


def get_user(email,db):
  if db.users is None:
    return None
  user = db.users.find_one({"email":email})
  return user

def put_user(email,db):
  row = dict()
  row["email"] = email
  row["time"] = 0
  db.users.insert_one(row)
  return {"message": "User succesfully created!",
          "auth": True,
          "user": True,
          "tasks": empty_tasks}, 201
