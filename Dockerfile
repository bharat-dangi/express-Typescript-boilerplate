FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN cd /usr/src/app

RUN npm install

CMD ["npm", "start"]

EXPOSE 8089