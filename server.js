// Required constants
const express = require('express');
const fs = require("fs"); // move to routes, will have fs function there
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize express app annd port
const app = express();
const PORT = process.env.PORT || 3001;

// Base parsing - need to update
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use('/', htmlRoutes);

// Listener - need to update
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  