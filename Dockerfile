FROM node:20-alpine

WORKDIR /app

COPY package.json /app

CMD ["npm", "install"]

COPY . /app

RUN npx prisma generate


EXPOSE 3000

CMD ["npm", "run", "dev"]

