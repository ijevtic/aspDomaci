import subprocess
import os
from dotenv import load_dotenv

def run_container(cont_name, image_name, id):
    load_dotenv()
    root = os.getenv('ROOT_PATH')
    cmd = ['docker', 'run', '--name', cont_name, '-it', '-v', f'{root}/docker_output:/opt/app/data/output', 
    '-v', f'{root}/task_data{id}:/opt/app/data/task_data',
    "--network", "none", image_name, '/opt/app/data/run_all.sh', str(id)]
    subprocess.run( cmd, stdout=subprocess.PIPE )


def stop_container(name):
    cmd = ['docker', 'stop', name]
    subprocess.run( cmd, stdout=subprocess.PIPE )

def delete_container(name):
    cmd = ['docker', 'rm', name]
    subprocess.run( cmd, stdout=subprocess.PIPE )