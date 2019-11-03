# build environment
FROM node:12-alpine AS pre-build
RUN apk add --upgrade --no-cache python build-base

FROM pre-build AS build
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci
COPY . /app
RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
