# MERN eCommerce App

This is a complete MERN-style eCommerce demo with:

- Product listing
- Cart management (add/update/remove)
- Checkout flow with customer details

## Project structure

- `backend` - Express API
- `frontend` - React + Vite UI

## Run locally

### 1) Backend

```bash
cd backend
npm install
npm run start
```

Server starts on `http://localhost:5000`.

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs on `http://localhost:5173` and uses backend API at `http://localhost:5000/api`.

To customize API URL, set `VITE_API_URL` in a `.env` file.
