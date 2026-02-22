FROM node:lts-alpine

WORKDIR /app

# تنظیم registry ایرانی برای npm
# RUN npm config set registry https://mirror-npm.runflare.com && \
#     npm config set strict-ssl false

# کپی package files
COPY package.json package-lock.json* ./

RUN npm install

COPY . .

# build app
RUN npm run build

# cleaning
RUN npm prune --omit=dev && \
    npm cache clean --force && \
    rm -rf .npm /tmp/*

# env config
ENV NODE_ENV=production \
    PORT=3004

EXPOSE 3004



CMD ["npm", "start"]

