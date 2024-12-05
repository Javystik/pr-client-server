FROM node:18

WORKDIR /srv/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3123

CMD ["node", "server.js"]
