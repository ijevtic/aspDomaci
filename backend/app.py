from flask import Flask
from flask_restful import Api
import os
from dotenv import load_dotenv
from flask_cors import CORS
from pymongo import MongoClient
from model.users import USERS
from model.tasks import TASKS

load_dotenv()

app = Flask(__name__)
CORS(app)
api = Api(app)

def update_pending():
  print('update')

def get_database():
  CONNECTION_STRING = os.getenv('CONNECTION_STRING')
  client = MongoClient(CONNECTION_STRING)
  return client[os.getenv('DATABASE_NAME')]


if __name__ == '__main__':
  db = get_database()

  api.add_resource(USERS, '/users', endpoint="users", resource_class_kwargs={'db': db})
  api.add_resource(TASKS, '/tasks', endpoint="tasks", resource_class_kwargs={'db': db})

  # compile()
  # serve(app, host="0.0.0.0", port=5000)

  # scheduler = BackgroundScheduler()
  from waitress import serve
  # scheduler.add_job(lambda: update_pending(), trigger="interval", seconds=25)
  # scheduler.start()
  prod = os.getenv("PRODUCTION","False") == 'True'
  if prod is True:
    serve(app, host="0.0.0.0", port=5000)
  else:  
    app.run(debug=True,host='0.0.0.0',port=int(os.environ.get('PORT', 5000)))

  # app.run(use_reloader=False)

  # subprocess.run(start_backup, args=[db])
