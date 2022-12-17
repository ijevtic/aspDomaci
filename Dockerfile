FROM ubuntu:20.04

WORKDIR /opt/app

COPY docker_data data/ 

WORKDIR /opt/app/

RUN apt-get update && \ 
    apt-get install -y python3.8 \
    python3-pip \
    clang


RUN pip install -r data/requirements.txt

USER 0

RUN mkdir -p /opt/app/output/lol

USER $CONTAINER_USER_ID
# RUN clang++ -o Test Test.cpp

# # Run the output program from the previous step
# CMD ["./Test"]