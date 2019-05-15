FROM ubuntu:18.04
MAINTAINER Guillaume Claret

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y apt-utils
RUN apt-get install -y python3-pip

COPY prodigy-1.7.1-cp35.cp36.cp37-cp35m.cp36m.cp37m-linux_x86_64.whl /
RUN python3 --version && pip3 --version
RUN pip3 install /prodigy-1.7.1-cp35.cp36.cp37-cp35m.cp36m.cp37m-linux_x86_64.whl
RUN python3 -m spacy download en_core_web_sm

COPY prodigy.json /root/.prodigy/
