FROM ubuntu:20.04

WORKDIR /opt/app

COPY docker_data data/ 

WORKDIR /opt/app/

RUN apt-get update && \ 
    apt-get install -y build-essential vim


WORKDIR /opt/app/data/

USER 0

RUN chmod 755 compile_script.sh
RUN chmod 755 run_script.sh
RUN chmod 755 run_all.sh
RUN mkdir -p /opt/app/data/output

USER $CONTAINER_USER_ID

WORKDIR /opt/app/data/

# RUN python3 container_init.py