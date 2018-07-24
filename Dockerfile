FROM node:10.6-alpine

WORKDIR /usr/src/app

RUN apk update && \
  apk add -U \
  bash && \
  rm -rf /var/cache/apk/*

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
