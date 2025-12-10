require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const eventRoutes = require('./routes/eventRoutes');


const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/auth', authRoutes);

// Event routes
app.use('/events', eventRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'EventFinder API is running' });
});

// Protected route 
app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route accessed', user: req.user });
});

// Connect to DB and start server
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
