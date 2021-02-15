FROM node:lts-alpine as build

# ARG CONFD_VERSION='0.16.0'

WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

# RUN wget https://github.com/kelseyhightower/confd/releases/download/v${CONFD_VERSION}/confd-${CONFD_VERSION}-linux-amd64 \
#     && mv confd-${CONFD_VERSION}-linux-amd64 confd \
#     && chmod +x confd

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

ENV SNOWPACK_PUBLIC_API_URL='/api'

RUN yarn build

FROM nginx:stable-alpine


COPY --chown=nginx:nginx --from=build /app/build /usr/share/nginx/html
# COPY --from=build /app/confd /usr/local/bin/confd

COPY --chown=nginx:nginx /nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --chown=nginx:nginx docker/bin/boot.sh /docker-entrypoint.d/boot.sh

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
