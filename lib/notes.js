// Required constants for fs and path
const fs = require('fs');
const path = require('path');

// grabs the note by id
function getNoteById(id, noteArray) {
    const result = noteArray.filter((note) => note.id === id)[0];
    console.log("This is get note by id", result);
    return result;
};

// Function to create a note
function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    console.log("This is notes array", notesArray)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
      );
      console.log("This is create note", note);

      return note;
};

// Function to delete note by id
function deleteNote(id, notesArray) {
    const currentNotesIndex = notesArray.findIndex(note => note.id === id);
    notesArray.splice(currentNotesIndex, 1);
    console.log("This is note I want to deleter", notesArray);
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