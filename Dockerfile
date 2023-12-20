FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./

RUN  yarn

COPY . .

EXPOSE 4000

CMD [ "yarn", "start:prod" ]