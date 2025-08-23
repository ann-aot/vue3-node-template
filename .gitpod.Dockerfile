FROM gitpod/workspace-full:latest

USER root

# Install PostgreSQL client
RUN apt-get update && apt-get install -y --no-install-recommends \
    postgresql-client \
 && rm -rf /var/lib/apt/lists/*

# Install specific Node.js version (20.x) and npm 11
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
 && apt-get install -y nodejs \
 && npm install -g npm@11

# Set gitpod user back
USER gitpod

# Optional: clean workspace and install dependencies
WORKDIR /workspace/vue3-node-template
RUN rm -rf node_modules package-lock.json \
 && npm install
