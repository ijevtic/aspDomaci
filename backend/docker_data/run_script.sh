#/bin/bash
# $1 submission_id 
# $2 task_id 
if test -f ./code$1; then
    mkfifo fifo
    for i in {0..1}
    do
        ./checker_$2 < fifo $1 $i | ./code$1 > fifo
    done
fi