import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import MovieCard from './../Movies/MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  console.log('movie.js', props);

  const params = useParams();
  console.log(params);
  // const MovieItem = props.movies.find(movie => movie.id === Number(params.id))

  useEffect(() => {
    const id = props.match.params.id

    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.match.params.id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => {
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <MovieCard movie={movie}/>
  );
};

export default Movie;
