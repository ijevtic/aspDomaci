import os

def grade(data, id, task_id):



    if 'subtask' in task_id:
        return grade_interactive(data, id, task_id)
    else:
        return grade_regular(data, id, task_id)


def grade_regular(data, id, task_id):
    
    data['passed'] = 0
    data['test_cases_num'] = 10

    path = os.getenv("ROOT_PATH")
    path = os.path.join(path,f"docker_output/output{id}/compile_log{id}.txt")
    compile_output = ""
    with open(path, 'r') as file:
        compile_output = file.read()
    data['error'] = compile_output
    if compile_output != "":
        data['status'] = "CE"
        return data;
    passed  = 0
    path = os.getenv("ROOT_PATH")
    path2 = os.path.join(path,f"docker_output/output{id}")
    path = os.path.join(path,f"docker_data/test_cases_{task_id}")  
    for i in range(1,11):
        with open(os.path.join(path,f'{i}.out'), 'r') as file:
            sol = file.read().strip()

        with open(os.path.join(path2,f'{i}.out'), 'r') as file:
            sol2 = file.read().strip()

        if sol2 == '':
            data['status'] = 'TLE'
            data[passed] = passed
            return data
        
        print(sol, sol2)
        if sol == sol2:
            passed = passed + 1

    print("CASES: ", 10)
    data['passed'] = passed
    if passed == 10:
        data['status'] = 'OK'
    else:
        data['status'] = 'WA'
    return data

def grade_interactive(data, id, task_id):
    
    path = os.getenv("ROOT_PATH")
    path = os.path.join(path,f"docker_data/test_cases_{task_id}.txt")  
    num_of_cases = 0
    with open(path, 'r') as file:
        num_of_cases = int((file.read()).split()[0])
    print("CASES: ", num_of_cases)
    data['test_cases_num'] = num_of_cases
    data['passed'] = 0

    path = os.getenv("ROOT_PATH")
    path = os.path.join(path,f"docker_output/output{id}/compile_log{id}.txt")
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
    try:
        with open(path, 'r') as file:
            checker_output = file.read()
    except:
        print('output file excpet')
        data['status'] = 'TLE'
        data['passed'] = 0
        return data
    checker_output = checker_output.split("\n")
    checker_output = [int(c) for c in checker_output if c.isdigit()]
    suma = sum(checker_output)
    print("PASSED:", suma)

    data['passed'] = suma
    if suma == num_of_cases:
        data['status'] = 'OK'
    elif len(checker_output) == num_of_cases:
        data['status'] = 'WA'
    else:
        data['status'] = 'TLE'
    return data
