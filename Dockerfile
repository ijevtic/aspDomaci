FROM ubuntu:20.04

WORKDIR /opt/app

COPY docker_data data/ 

WORKDIR /opt/app/data

RUN apt-get update && \ 
    apt-get install -y python3.8 \
    python3-pip

RUN pip install -r requirements.txt