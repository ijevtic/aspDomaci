import os

def grade(data, id):


    path = os.getenv("ROOT_PATH")
    path = os.path.join(path,f"docker_data/test_cases.txt")  
    num_of_cases = 0
    with open(path, 'r') as file:
        num_of_cases = int((file.read()).split()[0])
    print(num_of_cases)
    data['test_cases_num'] = num_of_cases
    data['passed'] = 0

    path = os.getenv("ROOT_PATH")
    path = os.path.join(path,f"docker_output/compile_log{id}.txt")
    compile_output = ""
    with open(path, 'r') as file:
        compile_output = file.read()
    data['error'] = compile_output
    if compile_output != "":
        data['status'] = "CE"
        return data
    

  

    path = os.getenv("ROOT_PATH")
    path = os.path.join(path,f"docker_output/output{id}.txt")
    
    checker_output = ""
    with open(path, 'r') as file:
        checker_output = file.read()
    checker_output = checker_output.split("\n")
    checker_output = [int(c) for c in checker_output if c.isdigit()]
    suma = sum(checker_output)
    print("checker output:", suma)

    data['passed'] = suma
    if suma == num_of_cases:
        data['status'] = 'OK'
    elif len(checker_output) == num_of_cases:
        data['status'] = 'WA'
    else:
        data['status'] = 'TLE'
    return data


    