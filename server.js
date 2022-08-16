// Required constants
const express = require('express');
const fs = require("fs");


// Initialize express app annd port
const app = express();
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/htmlRoutes');

// Base parsing - need to update
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', htmlRoutes);

// Listener - need to update
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  