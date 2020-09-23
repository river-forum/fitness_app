FROM node:12

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0
ENV TZ=Asia/Tokyo

COPY src .

RUN npm run build

# prodビルト、サーバ起動
CMD npm run start
# CMD tail -f /dev/null
