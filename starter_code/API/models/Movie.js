const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    image: String,
    description: String
})



module.exports = mongoose.model('Movie', movieSchema, 'movies')