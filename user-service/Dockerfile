FROM node:14

WORKDIR /usr/src/sbsc-user-service

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 6000

CMD ["node", "bin/www"]