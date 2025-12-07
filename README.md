# TechComfest

Monorepo untuk project TechComfest yang berisi frontend (Next.js) dan backend (Laravel).

## Struktur Project

```
TechComfest/
├── backend/          # Laravel API Backend
└── frontend/         # Next.js Frontend
```

## Backend (Laravel)

Backend API menggunakan Laravel dengan PHP.

### Setup Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

## Frontend (Next.js)

Frontend menggunakan Next.js dengan TypeScript.

### Setup Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

## Development

Pastikan kedua service berjalan untuk development:

- Backend: `http://localhost:8000`
- Frontend: `http://localhost:3000`
# Techcomfest
