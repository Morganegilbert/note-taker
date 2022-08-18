// const fs = require("fs");
// const path = require('path');
const router = require('express').Router();
const {getNoteById, createNote} = require('../lib/notes');
let {result} = require('../db/db.json');

// will need to adjust to pull note info from db file
router.get('/notes', (req, res) => {
    res.json(result);
});

router.post('/notes', (req, res) => {
    req.body.id = animals.length.toString();
    const note = createNote(req.text, result)
});

router.delete('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
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