# Vue 3 + Node (Express + TS) Professional Template

This monorepo provides a production-grade setup with Vue 3 + Vite frontend and Express + TypeScript backend.

## Features

- Frontend: Vue 3, Vite, TypeScript, Vitest, ESLint + Prettier
- Backend: Express, TypeScript, Zod validation, Vitest + Supertest
- Swagger/OpenAPI: served at `/docs` and via swagger-ui container
- Docker: Dev and Prod Dockerfiles, docker-compose for local dev
- Linting/Formatting: ESLint + Prettier pre-commit hook (Husky)
- CI: GitHub Actions to lint, build, and test

## Getting Started

Install dependencies at the root:

```bash
npm install
```

Run dev servers:

```bash
# Terminal 1
npm run --workspace backend dev

# Terminal 2
npm run --workspace frontend dev
```

Or with Docker Compose (dev):

```bash
# copy env
cp .env.sample .env
cd deployment
docker compose -f docker-compose.dev.yml up --build
```

Open (dev):

- Frontend: http://localhost:${FRONTEND_DEV_PORT:-5173}
- Backend: http://localhost:${BACKEND_PORT:-3000}
- Swagger UI: http://localhost:${SWAGGER_PORT:-8080}

## Scripts

- `npm run -ws build|dev|lint|format|test|typecheck` runs across workspaces.

## Deployment (prod)

- Configure environment: `cp deployment/.env.sample deployment/.env` and update values.
- Start: `cd deployment && docker compose up --build -d`.
- Open (prod):
  - Frontend: http://localhost:${FRONTEND_HTTP_PORT:-8080}
  - Backend: http://localhost:${BACKEND_HTTP_PORT:-3000}
  - Swagger UI: http://localhost:${BACKEND_HTTP_PORT:-3000}/docs

# vue3-node-template
Vue 3 and Node template
