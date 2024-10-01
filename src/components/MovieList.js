// src/components/MovieList.js
import React from 'react';

function MovieList({ movies }) {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id} className="movie-item">
          <strong>{movie.moviename}</strong> - {movie.moviegenre} - {movie.Hit ? "Hit" : "Flop"} - <img src={movie.poster} alt={movie.moviename} width="100" />
          <br />
          <strong>Release Date:</strong> {movie.releaseDate}
          <br />
          <strong>Actors:</strong> {movie.actorsNames.join(', ')}
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
