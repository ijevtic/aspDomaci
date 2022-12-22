import subprocess

if __name__ == "__main__":
  is_success_compilation = subprocess.call("./compile_script.sh")
  if is_success_compilation == 0:
    cmd = ['python3', 'execute_code.py']
    subprocess.run( cmd, stdout=subprocess.PIPE )