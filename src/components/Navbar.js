import React, { useState } from "react";
import Logo from "../assets/movielogo.webp";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ text, changeText, onSearchClick }) => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="rightSide">
        <input
          type="text"
          id="gsearch"
          name="gsearch"
          onChange={changeText}
          value={text}
          placeholder="search movie"
        ></input>
        <button onClick={onSearchClick}>Search Movies</button>
      </div>
    </div>
  );
};

export default Navbar;
