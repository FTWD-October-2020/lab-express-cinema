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

module.exports = router;
