const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Load environment variables
require('dotenv').config()

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/users', require('./routes/userRoutes'));

console.log(`Port: ${process.env.PORT}`);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
