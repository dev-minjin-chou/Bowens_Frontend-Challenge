import React from "react";
import imagesApi from "../config/ImagesApi";

const Movie = ({
  title,
  poster_path,
  vote_average,
  original_language,
  overview,
  original_title,
}) => {
  return (
    <div className="movie">
      <img src={imagesApi.getImageUrl + poster_path} alt={title} />
      <div className="info">
        <h2>{title}</h2>
        <span>{vote_average}</span>
        <h4>{overview}</h4>
      </div>
    </div>
  );
};

export default Movie;
