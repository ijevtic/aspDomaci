import subprocess

def run_container(name):
    cmd = ['docker', 'run', '--name', name, '-it', 'test', '/bin/bash']
    subprocess.run( cmd, stdout=subprocess.PIPE )

def stop_container(name):
    cmd = ['docker', 'stop', name]
    subprocess.run( cmd, stdout=subprocess.PIPE )

def delete_container(name):
    cmd = ['docker', 'rm', name]
    subprocess.run( cmd, stdout=subprocess.PIPE )