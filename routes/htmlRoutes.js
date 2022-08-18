// Required constants for path and router
const path = require('path');
const router = require('express').Router();

// returns index.html 
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// returns notes.html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// default returns to index
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// exports router
module.exports = router;