FROM node:20-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app
CMD ["npm", "run", "start"]