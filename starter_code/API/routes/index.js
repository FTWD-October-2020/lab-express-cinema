const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
      res.json(movies)
    })
    .catch(err => console.log(err))
});

router.get('/movies/:movieId', (req, res) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      res.json(movie)
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/movies/new', (req, res) => {
  console.log("reached")
  Movie.create(req.body)
    .then((movie) => {
      res.json(movie)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router;
