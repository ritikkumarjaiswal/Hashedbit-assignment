import React from 'react';
import './MovieDetails.css'

function MovieDetails({ movie, onBookSeat }) {
  return (
    <div className='details'>
      <h1>{movie.title}</h1>
      <p>Hurry up! limited seat for {movie.title}</p>
      <button onClick={onBookSeat}>Book Seat</button>
    </div>
  );
}

export default MovieDetails;
