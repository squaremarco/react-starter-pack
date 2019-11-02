# build environment
FROM node:12-alpine as build
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN apk add --upgrade --no-cache python build-base
RUN npm i -g node-gyp
RUN npm ci
COPY . /app
RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
