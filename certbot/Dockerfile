FROM certbot/certbot

RUN apk add --no-cache --virtual .certbot-deps \
    py3-pip \
    && pip3 install certbot-nginx
