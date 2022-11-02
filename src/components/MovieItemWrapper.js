import MovieItem from "./MovieItem";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const MovieItemWrapper = ({ moviesList, heading }) => {
  const isNonEmptyArray = (moviesList) => {
    return moviesList && moviesList.length > 0;
  };

  return (
    <div className="movie">
      <h1 className="movieTitle">{heading}</h1>
      <div className="movieList">
        {isNonEmptyArray(moviesList) &&
          moviesList.map((movieItem, key) => {
            return (
              <Fragment key={key}>
                <Link className="movie-link" to={`/${movieItem.imdbID}`}>
                  <MovieItem
                    title={movieItem.Title}
                    year={movieItem.Year}
                    poster={movieItem.Poster}
                  />
                </Link>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};
export default MovieItemWrapper;
