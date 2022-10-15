FROM node:16-alpine as builder

RUN mkdir -p /opt/node_app
WORKDIR /opt/node_app

COPY package.json yarn.lock ./
RUN yarn install --no-cache --frozen-lockfile --production=false && yarn cache clean
ENV PATH /opt/node_app/node_modules/.bin:$PATH


WORKDIR /opt/node_app
COPY . .

RUN yarn run build

# RM node modules !
RUN rm -Rf /opt/node_app/node_modules

FROM node:16-alpine
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV


# default to port 3000 for node, and 9229 and 9230 (tests) for debug
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT
# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=$PORT


# create destination directory
RUN mkdir -p /opt/node_app && chown node:node /opt/node_app
WORKDIR /opt/node_app

# update and install dependency
# RUN apk update && apk upgrade
# RUN apk add git

USER node
COPY package.json yarn.lock ./
RUN yarn install --no-cache --frozen-lockfile --production=false && yarn cache clean
ENV PATH /opt/node_app/node_modules/.bin:$PATH

# check every 30s to ensure this service returns HTTP 200
HEALTHCHECK --interval=30s CMD node healthcheck.js


# copy in our source code last, as it changes the most
USER node
WORKDIR /opt/node_app/app
COPY --from=builder /opt/node_app .

RUN export PATH=node_modules/.bin:$PATH

CMD [ "yarn", "run", "preview" ]