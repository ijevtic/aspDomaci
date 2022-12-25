#!/bin/bash
if test -f ./code$1; then
    mkfifo fifo
    ./checker < fifo $1 0 | ./code$1 > fifo
    ./checker < fifo $1 1 | ./code$1 > fifo
fi