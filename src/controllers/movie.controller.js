const Movie = require('../models/movie.model');

const movieCtrl = {};

// CREAR PELÍCULA
movieCtrl.addMovie = async (req, res) => {
    const myMovie = new Movie(req.body);
    await myMovie.save()
        .then(() => {
            res.status(201).json({
                status: true,
                message: 'Movie created'
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: false,
                message: err.message
            })
        })
}

module.exports = movieCtrl;