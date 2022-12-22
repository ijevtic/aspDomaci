#!/bin/bash
c++ -O3 -Wall -shared -std=c++11 -fPIC $(python3 -m pybind11 --includes) code.cpp -o code$(python3-config --extension-suffix)