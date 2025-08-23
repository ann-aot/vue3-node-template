# Vue 3 + Node (Express + TS) Professional Template

This monorepo provides a production-grade setup with Vue 3 + Vite frontend and Express + TypeScript backend.

## Features

- Frontend: Vue 3, Vite, TypeScript, Vitest, ESLint + Prettier
- Backend: Express, TypeScript, Zod validation, Vitest + Supertest
- Swagger/OpenAPI: served by backend at `/docs`
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

Or with Docker Compose (local):

```bash
# copy env
cp .env.sample .env
cd deployment
docker compose up --build
```

Open (local):

- Frontend: http://localhost:${FRONTEND_DEV_PORT:-5173}
- Backend: http://localhost:${BACKEND_PORT:-3000}
- Swagger UI: http://localhost:${BACKEND_PORT:-3000}/docs

## Development

Before running or committing code, make sure your files are properly formatted. You can fix the linting issue as below:

```bash
# Format all files
npm run -ws lint -- --fix
```
or 

```bash
- `npm run --workspace frontend/backend lint -- --fix`
```
```bash
## Scripts

- `npm run -ws build|dev|lint|format|test|typecheck` runs across workspaces.

## Deployment

- Configure environment: `cp deployment/.env.sample deployment/.env` and update values.
- Start locally: `cd deployment && docker compose up --build -d`.
- Open:
  - Frontend: http://localhost:${FRONTEND_HTTP_PORT:-8080}
  - Backend: http://localhost:${BACKEND_HTTP_PORT:-3000}
  - Swagger UI: http://localhost:${BACKEND_HTTP_PORT:-3000}/docs

Notes:

- Frontend container is built with `VITE_API_BASE_URL` passed at build time and also available at runtime.
- Nginx is configured with SPA fallback to `index.html`.
