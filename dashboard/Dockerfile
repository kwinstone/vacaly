FROM node as build-stage

WORKDIR /app

COPY package.json .
RUN npm i

COPY ./ /app/
RUN npm run build

RUN chmod 755 /etc/letsencrypt/live/vacaly.kz
RUN chmod 644 /etc/letsencrypt/live/vacaly.kz/*


FROM nginx:latest
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
