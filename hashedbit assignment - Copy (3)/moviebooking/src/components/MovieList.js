import React from 'react';
import './MovieList.css';


const movies = [
  { id: 1, title: 'Bloody Daddy', img: "image.png" },
  { id: 2, title: 'Mar Jaavaan', img: "OIP (1).jpeg" },
  { id: 3, title: 'Bloody Sweet', img: "OIP (2).jpeg" },
  { id: 4, title: 'Kick', img: "OIP (3).jpeg" },
  
];

function MovieList({ onMovieClick }) {
  return (
    <div>
    <h3 style={{textAlign:"center"}}>select Movie</h3>
     <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item" onClick={() => onMovieClick(movie)}>
          <img src={movie.img} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>

    </div>
   
  );
}

export default MovieList;
