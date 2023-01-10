#!/usr/bin/bash
#c++ -O3 -Wall -shared -std=c++11 -fPIC $(python3 -m pybind11 --includes) code.cpp -o code$(python3-config --extension-suffix)
# $1 submission_id 
# $2 task_id 
g++ -o code$1 task_data/code$1.cpp 2> output/output$1/compile_log$1.txt
g++ -o checker_$2 checker_$2.cpp
