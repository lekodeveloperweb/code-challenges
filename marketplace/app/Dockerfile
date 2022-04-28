FROM node:18-alpine as build
WORKDIR /app
ARG API_URL_BASE=http://localhost:8080
ENV VITE_API_URL_BASE=${VITE_API_URL_BASE}
COPY . .
RUN yarn install && yarn build && ls -la

FROM nginx:1.21.6-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ .
EXPOSE 80