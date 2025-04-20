# Environment Variables

## Backend (`/backend/.env`)

| Variable         | Required | Description                                      | Example                      |
|------------------|----------|--------------------------------------------------|------------------------------|
| `PORT`           | No       | Port for Express server (default: 5000)          | `5000`                       |
| `ALLOWED_ORIGIN` | Yes      | Allowed CORS origin for frontend requests        | `http://localhost:5173`      |
| _Add more as needed_ |      |                                                  |                              |

---

## Frontend (`/.env`)

| Variable         | Required | Description                                      | Example                      |
|------------------|----------|--------------------------------------------------|------------------------------|
| _Add as needed_  |          |                                                  |                              |

---

## Usage

- Copy `.env.example` to `.env` in both the root and `/backend` directories.
- Fill in the values as appropriate for your environment.
- **Never commit `.env` files with secrets to version control.**

---

## Notes

- Add new variables here as your project grows.
- For production, set these variables in your hosting provider's dashboard.