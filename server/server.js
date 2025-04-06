// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { insertFormData } from './mongo.js'; // adjust path if needed

dotenv.config();

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/form', async (req, res) => {
  try {
    const formData = req.body;
    await insertFormData(formData);
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    console.error('❌ Server error:', error);
    res.status(500).send('Error saving form data');
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
