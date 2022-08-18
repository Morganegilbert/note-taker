// Required constants
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Initialize express app and port
const app = express();
const PORT = process.env.PORT || 3001;

// Base parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use('/', htmlRoutes);
app.use('/', apiRoutes);


// Listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  