FROM node:12
WORKDIR /usr/src/app
COPY *.json ./
CMD [ "rm -rf node_modules" ]
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
