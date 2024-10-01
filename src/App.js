// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

// Main App Component
function App() {
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/thisAPI')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const addMovie = (movie) => {
    axios.post('http://localhost:8080/thisAPI', movie)
      .then(response => {
        setMovies([...movies, response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const toggleMovieList = () => {
    setShowMovies(!showMovies);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <MovieForm onAddMovie={addMovie} />
          <button onClick={toggleMovieList} className="toggle-button">
            {showMovies ? 'Hide Movies' : 'Show Movies'}
          </button>
          {showMovies && (
            <>
              <h2>Movies List</h2>
              <MovieList movies={movies} />
            </>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
