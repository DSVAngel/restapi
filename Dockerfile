FROM node:18

WORKDIR /src

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 8082

CMD ["node", "index.js"]
