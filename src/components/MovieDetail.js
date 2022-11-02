import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/MovieDetail.css";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const MovieDetails = (props) => {
  const [movieDetail, setMovieDetails] = useState("");
  let { movieId } = useParams();

  const fetchMovieDetails = useCallback(() => {
    const REQ_URL = `https://www.omdbapi.com/?i=${movieId}&apikey=f9ea032`;
    axios.get(REQ_URL).then((response) => {
      setMovieDetails(response.data);
    });
  }, [movieId]);
  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  const saveLikeMovie = () => {
    if (localStorage.getItem("movie-details") !== null) {
      let movieArr = [];
      movieArr = JSON.parse(localStorage.getItem("movie-details"));

      movieArr.push({ movieName: movieDetail.Title });

      localStorage.setItem("movie-details", JSON.stringify(movieArr));
    } else {
      localStorage.setItem(
        "movie-details",
        JSON.stringify([{ movieName: movieDetail.Title }])
      );
    }
  };

  return (
    <>
      <div className="movie-detail">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${movieDetail.Poster})` }}
        ></div>
        <div className="rightSide">
          <h1>{movieDetail.Title}</h1>
          <p>Actors: {movieDetail.Actors}</p>
          <p>Releasd: {movieDetail.Released}</p>
          <p>Runtime: {movieDetail.Runtime}</p>
          <p>Year: {movieDetail.Year}</p>
          <p>Director: {movieDetail.Director}</p>
          <p>Country: {movieDetail.Country}</p>
          <p>Language: {movieDetail.Language}</p>
          <p>
            <button className="like-button" onClick={saveLikeMovie}>
              <div className="btn">
                Give Thumbs Up If You Like this Movie
                <span>
                  <ThumbUpAltIcon />
                </span>
              </div>
            </button>
          </p>
        </div>
      </div>
      ;
    </>
  );
};

export default MovieDetails;
