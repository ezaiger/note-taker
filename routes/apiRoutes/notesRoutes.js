const router = require('express').Router();
let db = require('../../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    db.push(req.body);
    res.json(db);
    fs.writeFileSync('./db/db.json', JSON.stringify(db, null, '\t'));
});

router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id
    db = db.filter(note => note.id!=noteId)
    res.json(db);
    fs.writeFileSync('./db/db.json', JSON.stringify(db, null, '\t'));
});

module.exports = router;