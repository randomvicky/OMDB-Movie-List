import React from "react";
import "../styles/Movie.css";

const MovieItem = ({ title, year, poster }) => {
  return (
    <div className="movieItem">
      <div style={{ backgroundImage: `url(${poster})` }}></div>
      <p>{title}</p>
      <p>{year}</p>
    </div>
  );
};

export default MovieItem;
