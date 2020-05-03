FROM node:lts-alpine as builder

ARG ENV_NAME
# if ENV_NAME is not supply on build we assume to build a production container
ENV NODE_ENV=${ENV_NAME:-production}
ENV DISABLE_OPENCOLLECTIVE=true

COPY ./ /app
COPY package.json /app
COPY package-lock.json /app
WORKDIR /app

RUN npm install
RUN npm run build

FROM nginx:lts-alpine as production

COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;" ]
