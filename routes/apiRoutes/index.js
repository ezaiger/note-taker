const router = require('express').Router();
const notesRoutes = require('./notesRoutes');

router.use('/api', notesRoutes);

module.exports = router;