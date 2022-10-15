FROM <SERVICE_GIT_URL>:<VERSION>

ARG APP_ENV=production
ENV APP_ENV $APP_ENV

USER root

# get more for the image
RUN apt-get update && apt-get install -y procps

# Install pdo if you want to use database queue and install supervisor
RUN apt-get install -y supervisor

RUN rm -rf /tmp/* /var/cache/apk/*

# Use local configuration
COPY worker-queue.conf /etc/supervisord/conf.d/worker-queue.conf

# Copy of supervisor
RUN mkdir -p /run/supervisord /etc/supervisord/conf.d /var/log/supervisord

# Supervisord Settings 
COPY ./supervisord.conf /etc/supervisord.conf

# Enable volume with project source
WORKDIR /app

# Start
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
