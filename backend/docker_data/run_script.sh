#/bin/bash
# $1 submission_id 
# $2 task_id 
if test -f ./code$1; then
    mkfifo fifo
    if [ $2 = 'subtask1' ] 
    then
        for i in {0..5}
        do
            timeout 2s ./checker_$2 < fifo $1 $i | timeout 2s ./code$1 > fifo
        done
    fi
    if [ $2 = 'subtask2' ] 
    then
        for i in {0..5}
        do
            timeout 2s ./checker_$2 < fifo $1 $i | timeout 2s ./code$1 > fifo
        done
    fi
    if [ $2 = 'subtask3' ] 
    then
        for i in {0..11}
        do
            timeout 2s ./checker_$2 < fifo $1 $i | timeout 2s ./code$1 > fifo
        done
    fi
    if [ $2 = 'subtask4' ] 
    then
        for i in {0..3}
        do
            timeout 3s  ./code$1 < fifo | timeout 3s ./checker_$2 > fifo $1 $i
        done
    fi
fi