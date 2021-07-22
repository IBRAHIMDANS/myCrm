FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN  npm config set registry http://registry.npmjs.org
RUN  npm install

COPY . .

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN  npm config set registry http://registry.npmjs.org
RUN npm install

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]
