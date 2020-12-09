import React from 'react';
import Axios from 'axios';
import { useState } from "react";


const CreateNewMovie = () => {
    const [movie, setMovie] = useState({
        title: ""
    })
    function handleChange(event) {
        setMovie({
            ...movie,
             [event.target.name]: event.target.value });
    }

    const submit = () => {
        Axios.post("http://localhost:5000/movies/new", movie)
        .then(res => console.log(res, "We posted a movie"))
        .catch(err => console.log(err, "We've hit an error"))
    }

    return (
        <div>
            <input type="text" name="title" placeholder="title" value={movie.title} onChange={handleChange} />
            <input type="text" name="director" placeholder="director" value={movie.director} onChange={handleChange} />
            <input type="text" name="description" placeholder="description" value={movie.description} onChange={handleChange} />
            <input type="text" name="image" placeholder="image url" value={movie.image} onChange={handleChange} />
            <button onClick={submit}>Create</button>
        </div>
    );
};

export default CreateNewMovie;