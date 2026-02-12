from node:24
WORKDIR /app/backEnd
COPY backEnd/package*.json ./
RUN npm install
COPY backEnd/ ./
RUN npx prisma generate
WORKDIR /app/frontEnd
COPY frontEnd/dist ./dist
WORKDIR /app/backEnd
# CMD npx prisma db push && npm start
CMD npm start

# デプロイ環境でtscを実行してtsをビルドするようにする