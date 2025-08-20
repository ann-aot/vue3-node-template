# Deployment

This folder contains a production-oriented `docker-compose.yml` that runs:

- frontend (Nginx serving built assets)
- backend (Node.js Express app)
- db (Postgres)

## Usage

Build and start all services:

```bash
cd deployment
docker compose up --build -d
```

Services:

- Frontend: http://localhost:8080
- Backend: http://localhost:3000
- Postgres: localhost:5432

Environment variables (with defaults):

- POSTGRES_DB (default: appdb)
- POSTGRES_USER (default: appuser)
- POSTGRES_PASSWORD (default: apppass)
- DATABASE_URL (default: postgresql://appuser:apppass@db:5432/appdb)
- VITE_API_BASE_URL (default: http://backend:3000)

