#/bin/bash
# $1 submission_id 
# $2 task_id 
if test -f ./code$1; then
    mkfifo fifo
    if [ $2 = 'subtask1' ] 
    then
        for i in {0..2}
        do
            timeout 1s ./checker_$2 < fifo $1 $i | timeout 1s ./code$1 > fifo
        done
    fi
    if [ $2 = 'subtask2' ] 
    then
        for i in {0..1}
        do
            timeout 1s ./checker_$2 < fifo $1 $i | timeout 1s ./code$1 > fifo
        done
    fi
    if [ $2 = 'subtask3' ] 
    then
        for i in {0..1}
        do
            timeout 1s ./checker_$2 < fifo $1 $i | timeout 1s ./code$1 > fifo
        done
    fi
fi