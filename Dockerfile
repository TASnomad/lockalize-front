FROM node:lts-alpine as builder

ARG BUILD_ENV
# if BUILD_ENV is not supply on build we assume to build a production container
ENV NODE_ENV=${BUILD_ENV:-production}
ENV REACT_APP_STAGE=${BUILD_ENV:-production}
ENV DISABLE_OPENCOLLECTIVE=true

COPY ./ /app
COPY package.json /app
COPY package-lock.json /app
WORKDIR /app

RUN npm install
RUN npm run "build:${NODE_ENV}"


FROM nginx:alpine as production

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443

CMD [ "nginx", "-g", "daemon off;" ]
