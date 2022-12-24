#!/bin/bash
mkfifo fifo
./checker < fifo $1 0 | ./code$1 > fifo
./checker < fifo $1 1 | ./code$1 > fifo
