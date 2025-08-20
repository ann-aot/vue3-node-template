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

Or with Docker Compose:

```bash
docker compose up --build
```

Open:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- Swagger UI: http://localhost:8080

## Scripts

- `npm run -ws build|dev|lint|format|test|typecheck` runs across workspaces.

# vue3-node-template
Vue 3 and Node template
