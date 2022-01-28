#BUILDING THE DOCKERFILE
FROM node:alpine as builder
ARG APP_ENV
WORKDIR /var/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#SERVING THE IMAGE WITH NGINX
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /var/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]





