FROM gitpod/workspace-full:latest

USER root

# Install PostgreSQL client + Node 20 + npm 11
RUN apt-get update && apt-get install -y --no-install-recommends \
    postgresql-client \
 && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
 && apt-get install -y nodejs \
 && npm install -g npm@11 \
 && rm -rf /var/lib/apt/lists/*

USER gitpod