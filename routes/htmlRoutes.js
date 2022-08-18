// const fs = require("fs");
const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Add function for create note
function getNote() {};
function createNote() {};
// createNote
// get note with GET, save note with POST

// Add function for delete note
function deleteNote() {};
//DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
//In order to delete a note, you'll need to read all notes from the db.json file, remove the note
//with the given id property, and then rewrite the notes to the db.json file.
// delete note with DELETE

module.exports = router;