import React, { useState, useEffect, useContext } from "react";
import imagesApi from "../config/ImagesApi";
import imdbApi from "../config/ImdbApi";
import { GlobalContext } from "../context/GlobalState";

const Movie = ({ movie }) => {
  const [imdb, setImdb] = useState([]);

  const { markMovieAsWatched, watched } = useContext(GlobalContext);

  let storedMovies = watched.find((mv) => mv.id === movie.id);

  const duplicatesAdded = storedMovies ? true : false;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=1e448e0dfcdbb565f5d329820065b4d2`
    )
      .then((res) => res.json())
      .then((data) => {
        setImdb(data);
      });
  }, []);

  return (
    <div className="movie">
      <a href="/#">
        <img
          src={
            movie.poster_path
              ? imagesApi.getImageUrl + movie.poster_path
              : "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          }
          alt={movie.title}
        />
      </a>

      <div className="info">
        <h2>{movie.title}</h2>
        <br />
        <div className="rating">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          <span> {movie.vote_average} / 10</span>
        </div>
        <br />
        <div className="attributes">
          <p className="language">{movie.original_language}</p>
          <p className="date">Release date: {movie.release_date}</p>
        </div>
        <div className="overview">
          <p>{movie.overview}</p>
        </div>
        <a href={imdbApi.getImdbUrl + imdb.imdb_id}>
          <button>Read more</button>
        </a>
        <button
          className="btn"
          disabled={duplicatesAdded}
          onClick={() => markMovieAsWatched(movie)}
        >
          Watched
        </button>
      </div>
    </div>
  );
};

export default Movie;
