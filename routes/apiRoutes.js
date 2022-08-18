// Required constants for router, functions, and notes
const router = require('express').Router();
const {createNote, deleteNote} = require('../lib/notes');
let {notes} = require('../db/db.json');

// Router inbetween for json of results
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// Router inbetween for json of note, also pushes params to createNote
router.post('/notes', (req, res) => {
    // Sets id to note based on current time
    req.body.id = Date.now().toString();
    const note = createNote(req.body, notes)
    res.json(note);
});

// Router inbetween for delete
router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(notes);
});

// Export
module.exports = router;