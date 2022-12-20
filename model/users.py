from flask_restful import reqparse, Resource

class USERS(Resource):

  def __init__(self, db):
    self.db = db

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

    if (get_user(data['email'],self.db) is not None):
      return {"message": "User already exists!"}, 400
    
    return put_user(data,self.db)


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