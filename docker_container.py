import subprocess
import os
from dotenv import load_dotenv

def run_container(name):
    load_dotenv()
    cmd = ['docker', 'run', '--name', name, '-it', '-v', os.getenv("ROOT_PATH") + 'docker_output:/opt/app/output',  'test', '/bin/bash']
    subprocess.run( cmd, stdout=subprocess.PIPE )

def stop_container(name):
    cmd = ['docker', 'stop', name]
    subprocess.run( cmd, stdout=subprocess.PIPE )

def delete_container(name):
    cmd = ['docker', 'rm', name]
    subprocess.run( cmd, stdout=subprocess.PIPE )