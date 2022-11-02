import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movie from "./components/Movie";
import MovieDetail from "./components/MovieDetail";
import axios from "axios";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [text, setText] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isError, setIsError] = useState(false);
  const changeText = (event) => {
    let searchText = event.target.value;

    if (searchText === "") {
      setIsSearchActive(false);
      setIsError(false);
    }
    setText(searchText);
  };
  const onSearchClick = () => {
    setIsSearchActive(true);
    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=f9ea032`)
      .then((response) => {
        if (response.data.Response === "True") {
          setSearchMovie(response.data.Search);
        } else {
          setIsError(true);
        }
      });
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar
          text={text}
          changeText={changeText}
          onSearchClick={onSearchClick}
        />
        <Routes>
          <Route path="/:movieId" exact element={<MovieDetail />} />
          <Route
            path="/"
            exact
            element={
              <Movie
                searchResult={searchMovie}
                isSearchActive={isSearchActive}
                isError={isError}
              />
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
