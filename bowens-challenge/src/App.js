import React, {useState, useEffect} from 'react';
import './App.css';

import Movie from './components/Movies';

// API Urls
import MoviesApi from './config/MoviesApi';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(MoviesApi.getMoviesUrl).then((res) => res.json())
                                 .then((data) => {
                                   console.log(data);
                                   setMovies(data.results);
                                 });

  }, []);
  return (
    <div className="movie-container">
      {movies.length > 0 && movies.map((movie) => 
        <Movie key={movie.id} {...movie}/>
      )}
    </div>
    
  );
}

export default App;
