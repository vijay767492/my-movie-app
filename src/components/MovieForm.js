// src/components/MovieForm.js
import React, { useState } from 'react';

function MovieForm({ onAddMovie }) {
  const [newMovie, setNewMovie] = useState({
    moviename: '',
    moviegenre: '',
    Hit: false,
    poster: '',
    releaseDate: '',
    actorsNames: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const movieWithActors = {
      ...newMovie,
      actorsNames: newMovie.actorsNames.split(',').map(name => name.trim())
    };
    onAddMovie(movieWithActors);
    setNewMovie({
      moviename: '',
      moviegenre: '',
      Hit: false,
      poster: '',
      releaseDate: '',
      actorsNames: ''
    });
    setMessage('Movie added successfully! Thank you!');
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewMovie((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="movie-form">
        <label>
          Movie Name:
          <input
            type="text"
            name="moviename"
            value={newMovie.moviename}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Genre:
          <input
            type="text"
            name="moviegenre"
            value={newMovie.moviegenre}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Hit:
          <input
            type="checkbox"
            name="Hit"
            checked={newMovie.Hit}
            onChange={handleInputChange}
            className="checkbox-field"
          />
        </label>
        <br />
        <label>
          Poster URL:
          <input
            type="text"
            name="poster"
            value={newMovie.poster}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Release Date:
          <input
            type="date"
            name="releaseDate"
            value={newMovie.releaseDate}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Actors Names (comma separated):
          <input
            type="text"
            name="actorsNames"
            value={newMovie.actorsNames}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <br />
        <button type="submit" className="submit-button">Add Movie</button>
      </form>
    </div>
  );
}

export default MovieForm;
