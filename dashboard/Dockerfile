FROM node as build-stage

WORKDIR /app

COPY package.json .
RUN npm i

COPY ./ /app/
RUN npm run build

FROM nginx:latest
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /app/ /usr/share/orig

COPY nginx/nginx.conf /etc/nginx/nginx.conf
