const fs = require("fs");
const path = require('path');
let {result} = require('../db/db.json');


// Add function for create note
function getNoteById(id, noteArray) {
    const result = noteArray.filter((note) => note.id === id)[0];
    console.log("This is get note by id", result);
    return result;
};

function createNote(body, noteArray) {
    const note = body;
    noteArray.push(noteText);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ note: noteArray }, null, 2)
      );
      console.log("This is create note", note);

      return note;
};
// createNote
// get note with GET, save note with POST

// Add function for delete note
// function deleteNote() {};
//DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
//In order to delete a note, you'll need to read all notes from the db.json file, remove the note
//with the given id property, and then rewrite the notes to the db.json file.
// delete note with DELETE

// module.exports = router;
module.exports = {
    getNoteById,
    createNote
};