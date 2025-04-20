import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Initialize environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || 'http://localhost:5173', // Restrict CORS
  methods: ['GET', 'POST'], // Restrict methods
  credentials: true, // Allow credentials
}));
app.use(express.json());

// Basic route to test the server
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Default /api route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.status || 500;
  res.status(statusCode).json({ error: 'Something went wrong. Please try again.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;