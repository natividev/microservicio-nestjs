FROM node:18.16.0

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

WORKDIR /usr/src/app
COPY . .

# Generamos cliente de Prisma
RUN npm install -g prisma
RUN npx prisma generate

# Ejecutar build de Backend
WORKDIR /usr/src/app
RUN npm install
RUN npm run build

RUN npm install -g pm2
RUN npx prisma migrate deploy

EXPOSE 8001

CMD ["pm2-runtime","ecosystem.config.ts"]
