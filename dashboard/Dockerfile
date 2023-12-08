FROM node:20-alpine

WORKDIR /data

COPY package.json .
RUN npm i

COPY . .

RUN npm run build