import React from 'react';
import { useState } from "react";


const CreateNewMovie = () => {
    const [movie, setMovie] = useState({
        title: ""
    })
    function handleChange(event) {
        setMovie({ title: event.target.value });
    }

    return (
        <div>
            <input type="text" placeholder="movie name" value={movie.title} onChange={handleChange} />
            <button>Create</button>
        </div>
    );
};

export default CreateNewMovie;