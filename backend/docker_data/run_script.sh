#!/bin/bash
mkfifo fifo
./checker < fifo | ./code > fifo
