import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

function EditMovie(props) {
  const history = useHistory()
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    image: "",
    description: "",
  });
  
  useEffect(() => {
    axios
    .get(`http://localhost:5000/movies/${props.match.params.movieId}`)
    .then((res) => {
      setMovie(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  function editMovieDetails(){
    axios
    .put(`http://localhost:5000/movies/edit/${props.match.params.movieId}`, movie)
    .then((res)=> {
      history.push(`/movies/detail/${movie._id}`)
    })
  }

  function handleChange(event) {
    setMovie ({
      ...movie,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div>
      <input 
      type="text" 
      name="title"
      value={movie.title}
      placeholder="title"
      onChange={handleChange}/>
      <input 
      type="text" 
      name="director"
      value={movie.director}
      placeholder="director"
      onChange={handleChange}/>
      <input 
      type="text" 
      name="image"
      value={movie.image}
      placeholder="image"
      onChange={handleChange}/>
      <input 
      type="text" 
      name="description"
      value={movie.description}
      placeholder="description"
      onChange={handleChange}/>
      <button onClick={editMovieDetails}>Submit</button>
    </div>
  )
}

export default EditMovie;