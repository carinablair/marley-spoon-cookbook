# https://hub.docker.com/_/node/
FROM node:14-alpine3.11 as build
WORKDIR /app

# Install pacakges so they are cached.
# These will update if the package.json or yarn.lock change
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn run build

# A production style environment using the speedy webserver nginx
FROM nginx:1.21.3-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]