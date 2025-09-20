require('dotenv').config(); // Load env variables
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

app.use(express.json());

app.post('/api/send-info', (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Name is required!" });
  }

  console.log('Received from frontend:', name);
  res.json({ message: `Hello ${name}, your data was received!` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
