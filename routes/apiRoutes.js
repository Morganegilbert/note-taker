// const fs = require("fs");
// const path = require('path');
const router = require('express').Router();
const {createNote, deleteNote} = require('../lib/notes');
let {notes} = require('../db/db.json');

// will need to adjust to pull note info from db file
router.get('/notes', (req, res) => {
    let results = notes;
    console.log("This is results", results);
    res.json(results);
});

router.post('/notes', (req, res) => {
    console.log("This is my request", req);
    req.body.id = Date.now().toString();
    const note = createNote(req.body, notes)
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(notes);
});

router.param("id", (req, res, next, id) => {
    console.log(id)
    next()
})
// Add function for create note
// function getNoteById(id, noteArray) {
//     const result = noteArray.filter((note) => note.id === id)[0];
//     return result;
// };

// function createNote(text, noteArray) {
//     const noteText = text;
//     noteArray.push(noteText);
//     fs.writeFileSync(
//         path.join(__dirname, '../db/db.json'),
//         JSON.stringify({ note: noteArray }, null, 2)
//       );
//       return note;
// };
// createNote
// get note with GET, save note with POST

// Add function for delete note
// function deleteNote() {};
//DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
//In order to delete a note, you'll need to read all notes from the db.json file, remove the note
//with the given id property, and then rewrite the notes to the db.json file.
// delete note with DELETE

module.exports = router;
// module.exports = {
//     router,
//     getNoteById,
//     createNote
// };