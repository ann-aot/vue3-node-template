# Deployment

This folder contains docker-compose files that run:

- frontend (Nginx serving built assets)
- backend (Node.js Express app; serves Swagger UI at `/swagger`)
- db (Postgres)

## Usage

Build and start all services:

```bash
cd deployment
docker compose up --build -d
```

Services:

- Frontend: http://localhost:${FRONTEND_HTTP_PORT:-8080}
- Backend: http://localhost:${BACKEND_HTTP_PORT:-3000}
- Swagger: http://localhost:${BACKEND_HTTP_PORT:-3000}/swagger
- Postgres: localhost:${POSTGRES_HOST_PORT:-5432}

Environment variables (with defaults):

- POSTGRES_DB (default: appdb)
- POSTGRES_USER (default: appuser)
- POSTGRES_PASSWORD (default: apppass)
- DATABASE_URL (default: postgresql://appuser:apppass@db:5432/appdb)
- VITE_API_BASE_URL (default: http://backend:3000)

