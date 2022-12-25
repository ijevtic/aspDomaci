#!/bin/bash
#c++ -O3 -Wall -shared -std=c++11 -fPIC $(python3 -m pybind11 --includes) code.cpp -o code$(python3-config --extension-suffix)
g++ -o code$1 task_data/code$1.cpp 2> output/compile_log$1.txt
g++ -o checker checker.cpp
