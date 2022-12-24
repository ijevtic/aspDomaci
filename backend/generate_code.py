import os

def generate_code(id, task_code):
  root_path = os.getenv('ROOT_PATH')
  dir_name = f'task_data{id}'
  dir_path = os.path.join(root_path,dir_name)
  os.mkdir(dir_path)
  with open(os.path.join(dir_path,f'code{id}.cpp'), 'w') as f:
    f.write(task_code)