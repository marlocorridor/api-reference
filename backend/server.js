const express = require('express');
const connectDB = require('./db');
const Contact = require('./models/Contact');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// GET all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
