FROM node:14

WORKDIR /usr/src/sbsc-gateway

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1010

CMD ["node", "bin/www"]