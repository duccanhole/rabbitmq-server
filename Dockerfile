FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN  yarn

COPY . .

RUN yarn build

EXPOSE 4000

CMD [ "node", "dist/main" ]