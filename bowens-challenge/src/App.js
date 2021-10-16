import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Movie from "./components/Movies";

// API Urls
import MoviesApi from "./config/MoviesApi";
import searchApi from "./config/SearchApi";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  // Function for getting movies with different apis.
  const getMovies = (movies_url) => {
    fetch(movies_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  useEffect(() => {
    getMovies(MoviesApi.getMoviesUrl);
  }, []);

  // Handles search movies by keywords.
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (search) {
      getMovies(searchApi.getSearchUrl + search);
      setSearch("");
    }
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter movies by year/language.
  const filterMovies = movies.filter(
    (movie) =>
      movie.release_date.indexOf(filter.toLowerCase()) >= 0 ||
      movie.original_language.toLowerCase().indexOf(filter.toLowerCase()) >= 0
  );

  return (
    <div className="website">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 justify-content-between">
        <a className="navbar-brand" href="/#">
          Martin's Movies
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Movies & TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Contact Us
              </a>
            </li>
          </ul>

          <form class="form-inline my-2 my-lg-0" onSubmit={handleOnSubmit}>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search movies.."
              aria-label="Search"
              value={search}
              onChange={handleOnChange}
            />
          </form>
          <button>LOGIN</button>
          <div className="login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </div>
        </div>
      </nav>
      <div className="movie-image">
        <div className="movie-title">
          <h1>Movie</h1>
          <br />
        </div>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search movies by year or language.."
          className="filter-bar"
          onChange={handleChange}
        />
      </form>
      <div className="movie-container">
        {filterMovies.length > 0 ? (
          filterMovies.map((movie) => <Movie key={movie.id} {...movie} />)
        ) : (
          <div>
            <h1>No Movies Found :(</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
