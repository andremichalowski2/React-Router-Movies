import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  return {
    <Link to=`/movies/${props.id}`>Details</Link>
  };
};

export default MovieCard;
