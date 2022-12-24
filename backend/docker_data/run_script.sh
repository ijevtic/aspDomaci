#!/bin/bash
mkfifo fifo
./checker < fifo $1 | ./code$1 > fifo
