import React, { Component, useState, useEffect } from "react";
import axios from "axios";

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
        return <h1>{movie.title}</h1>;
      })
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
