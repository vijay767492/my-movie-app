import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Body() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: 'ad20c722b72b7bd97f502b8d30b5a287', // Replace with your actual API key
            },
          }
        );
        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        setError('Error fetching movies. Please try again later.');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main className="body">
      <h2 className="heading">Popular Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average}/10</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Body;
