FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.27.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html