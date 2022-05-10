
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=9004

EXPOSE 9004

CMD [ "npm", "start" ]