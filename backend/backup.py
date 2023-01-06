from apscheduler.schedulers.background import BlockingScheduler
from pymongo import MongoClient
from dotenv import load_dotenv
import os
import json
from constants import backup_path, backup_seconds
from datetime import datetime

def db_backup(db):
  if db is None or db.tasks is None:
    return
  task_cursor = db.tasks.find({})
  tasks = []
  for task in task_cursor:
    task.pop('_id')
    # print(json.dumps(task))
    tasks.append(task)
  
  now = datetime.now() 
  date_time = now.strftime("%d.%m.%Y,%H:%M:%S")
  file_name = date_time.strip()

  with open(backup_path + file_name + '.json', 'w') as fout:
    json.dump(tasks, fout)

def get_database():
  CONNECTION_STRING = os.getenv('CONNECTION_STRING')
  client = MongoClient(CONNECTION_STRING)
  return client[os.getenv('DATABASE_NAME')]

if __name__ == '__main__':
  load_dotenv()
  os.makedirs(os.path.dirname(backup_path), exist_ok=True)
  db = get_database()

  scheduler = BlockingScheduler()
  scheduler.add_job(db_backup, 'interval', seconds = backup_seconds, args=[db])
  scheduler.start()