# API Documentation

## Base URL

- Development: `http://localhost:5000`
- Production: _Set via environment variable_

---

## Endpoints

### `GET /`

**Description:**  
Health check for the backend server.

**Response:**
```json
{
  "message": "Server is running!"
}
```

---

### `GET /api`

**Description:**  
Welcome endpoint for the API.

**Response:**
```json
{
  "message": "Welcome to the API!"
}
```

---

### _[Add your custom endpoints here as you build them]_


---

## Error Handling

All errors return a JSON response:

```json
{
  "error": "Something went wrong. Please try again."
}
```

In development, the error message may be more detailed.

---

## CORS

- Only requests from the allowed origin (set in `.env` as `ALLOWED_ORIGIN`) are accepted.
- Methods allowed: `GET`, `POST`
- Credentials are supported.

---

## Notes

- Extend this documentation as you add more endpoints (e.g., for contact forms, reviews, etc.).
- For authentication or more complex APIs, add request/response examples and authentication details.