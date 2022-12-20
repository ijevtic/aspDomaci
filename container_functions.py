import subprocess
from dotenv import load_dotenv

def run_container(cont_name, image_name):
    load_dotenv()
    cmd = ['docker', 'run', '--name', cont_name, '-it', '-v', '/home/ijevtic/Documents/projects/aspDomaci/docker_output:/opt/app/output',
    "--network", "none", image_name, '/bin/bash']
    subprocess.run( cmd, stdout=subprocess.PIPE )

def stop_container(name):
    cmd = ['docker', 'stop', name]
    subprocess.run( cmd, stdout=subprocess.PIPE )

def delete_container(name):
    cmd = ['docker', 'rm', name]
    subprocess.run( cmd, stdout=subprocess.PIPE )