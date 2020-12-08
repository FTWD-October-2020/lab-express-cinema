
import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieDetail = (props) => {
    console.log(props)
    let [movie , setMovie] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/movies/${props.match.params.movieId}`)
            .then((res) =>{
                debugger
                setMovie(res.data)
                console.log(movie)
            })
            .catch(err=>{
                debugger
                console.log(err)
            })
    },[])

    const listMovieDetails = () => {
        return (
            <div>

                <h1>{movie.title}</h1>
            </div>
        )
    }

    return (
        <div>
           {listMovieDetails()} 
        </div>
    );
};

export default MovieDetail;