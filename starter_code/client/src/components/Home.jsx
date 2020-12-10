import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export default function Home(props) {
  const [movies, setMovies] = useState(false);
  function callMyBackend() {
    // this is an example call to our backend
    axios.get("http://localhost:5000/movies").then((response) => {
      setMovies(response.data);
    });
  }
  console.log(movies);

  function listMovieData() {
    return (
      movies &&
      movies.map((movie) => {
        return (
        <div>
        <Link to={`/movies/detail/${movie._id}`}><h1>{movie.title}</h1></Link>
        <Link to={`/movies/edit/${movie._id}`}>Edit Movie</Link>
        </div>
      )})
    );
  }

  return (
    <div>
      <button onClick={callMyBackend}>Test Backend Call</button>
      <h1>Welcome to Express Cinema</h1>
      {listMovieData()}
    </div>
  );
}
