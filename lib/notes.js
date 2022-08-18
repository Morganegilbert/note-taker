// Required constants for fs and path
const fs = require('fs');
const path = require('path');

// grabs the note by id
function getNoteById(id, noteArray) {
    const result = noteArray.filter((note) => note.id === id)[0];
    return result;
};

// Function to create a note
function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
      );
      return note;
};

// Function to delete note by id
function deleteNote(id, notesArray) {
    const currentNotesIndex = notesArray.findIndex(note => note.id === id);
    notesArray.splice(currentNotesIndex, 1);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
      );
      return;
};

// Module export for functions
module.exports = {
    getNoteById,
    createNote,
    deleteNote
};