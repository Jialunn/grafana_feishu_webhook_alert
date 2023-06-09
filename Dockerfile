FROM node:16.20.0-alpine
LABEL authors="PJLAB\lijialun"

COPY . /workspace
WORKDIR /workspace

RUN npm install pm2 --save
RUN npm install --production

EXPOSE 5158

# Show current folder structure in logs
RUN ls -al

CMD [ "npm", "run", "prd_docker"]