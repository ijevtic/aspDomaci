import subprocess
from dotenv import load_dotenv

def run_container(cont_name, image_name):
    load_dotenv()
    cmd = ['docker', 'run', '--name', cont_name, '-it', '-v', '/home/mihailot/Documents/asp/aspDomaci/backend/docker_output:/opt/app/data/output',
    "--network", "none", image_name, '/opt/app/data/run_all.sh']
    subprocess.run( cmd, stdout=subprocess.PIPE )


def stop_container(name):
    cmd = ['docker', 'stop', name]
    subprocess.run( cmd, stdout=subprocess.PIPE )

def delete_container(name):
    cmd = ['docker', 'rm', name]
    subprocess.run( cmd, stdout=subprocess.PIPE )