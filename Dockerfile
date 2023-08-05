FROM node:lts-alpine
WORKDIR /app 
COPY package*.json ./
RUN npm install
# Install prisma 
RUN npm install -g prisma
COPY . .
EXPOSE 4000
CMD ["nodemon", "src/server.js"]
