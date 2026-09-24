const express = require('express');
const movieCtrl = require('../controllers/movie.controller');
const router = express.Router();

router.post('/', movieCtrl.addMovie);

module.exports = router;