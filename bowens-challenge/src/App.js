import React, { useState, useEffect } from "react";
import "./App.css";

import Movie from "./components/Movies";

// API Urls
import MoviesApi from "./config/MoviesApi";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(MoviesApi.getMoviesUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  return (
    <div className="website">
      <div className="movie-image">
        <div className="movie-title">
          <h1>Movie</h1>
          <br />
        </div>
      </div>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
