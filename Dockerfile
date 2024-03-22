FROM --platform=linux/amd64 node:alpine3.10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3005
CMD ["npm", "start"]