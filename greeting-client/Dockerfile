FROM node:10.14.2-stretch as build
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
COPY stub/GreetingService_grpc_web_pb.js  ./node_modules
COPY stub/GreetingService_pb.js  ./node_modules
RUN yarn run build

FROM nginx:1.15.7-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
