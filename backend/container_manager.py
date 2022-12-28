import time
from container_functions import run_container, stop_container, delete_container
from multiprocessing import Process

def start_container_cycle(id,task_id):
    container_name = f'cont{id}'
    p1 = Process(target=run_container, args=(container_name,'test',id,task_id))
    p1.start()
    p1.join()
    print('run')
    time.sleep(5)
    stop_container(container_name)
    print('stop')
    time.sleep(2)
    delete_container(container_name)
    print('delete')