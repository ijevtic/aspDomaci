import time
from docker_container import run_container, stop_container, delete_container
from multiprocessing import Process

if __name__ == '__main__':
    p1 = Process(target=run_container, args=('test_container',))
    p1.start()
    print('run')
    time.sleep(15)
    stop_container('test_container')
    time.sleep(10)
    delete_container('test_container')
    p1.join()