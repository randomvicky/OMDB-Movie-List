import React, { useState, useEffect } from "react";

import axios from "axios";
import MovieItemWrapper from "../components/MovieItemWrapper";
const Movie = ({ searchResult, isSearchActive, isError }) => {
  const [romanticMovies, setRomanticMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);

  const fetchRomenticMovies = () => {
    axios
      .get("https://www.omdbapi.com/?s=Romantic&apikey=f9ea032")
      .then((response) => {
        setRomanticMovies(response.data.Search);
      });
  };

  const fetchComedyMovies = () => {
    axios
      .get("https://www.omdbapi.com/?s=comedy&apikey=f9ea032")
      .then((response) => {
        setComedyMovies(response.data.Search);
      });
  };

  const fetchAnimationMovies = () => {
    axios
      .get("https://www.omdbapi.com/?s=comedy&apikey=f9ea032&type=movie")
      .then((response) => {
        setAnimationMovies(response.data.Search);
      });
  };
  useEffect(() => {
    fetchRomenticMovies();
    fetchComedyMovies();
    fetchAnimationMovies();
  }, []);

  return (
    <div>
      {isSearchActive ? (
        isError ? (
          <div className="movie-result">No Result Found</div>
        ) : (
          <MovieItemWrapper
            moviesList={searchResult}
            heading={"YOUR SEARCH RESULT"}
          />
        )
      ) : (
        <>
          <MovieItemWrapper
            moviesList={romanticMovies.slice(0, 6)}
            heading={"TOP ROMANTIC MOVIES"}
          />
          <MovieItemWrapper
            moviesList={comedyMovies.slice(0, 6)}
            heading={"TOP COMEDY MOVIES"}
          />
          <MovieItemWrapper
            moviesList={animationMovies.slice(0, 6)}
            heading={"TOP ANIMATION MOVIES"}
          />
        </>
      )}
    </div>
  );
};

export default Movie;
