FROM node:20-alpine

WORKDIR /usr/src/app

COPY app/package*.json ./
RUN npm ci --omit=dev

COPY app/ ./

ENV PORT=4000
EXPOSE 4000

CMD ["npm", "start"]
