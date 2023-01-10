import os

def generate_code(id, task_code):
  root_path = os.path.join(os.getenv('ROOT_PATH'),'task_data')
  dir_name = f'task_data{id}'
  dir_path = os.path.join(root_path,dir_name)
  os.mkdir(dir_path)
  with open(os.path.join(dir_path,f'code{id}.cpp'), 'w') as f:
    f.write(task_code)

  os.mkdir(os.path.join(os.getenv('ROOT_PATH'),f'docker_output/output{id}'))