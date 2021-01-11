import React from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-con">
        <div className="navbar-title">
          <h1 className="title-text">P0W</h1>
        </div>
        <div className="navbar-searchbar">
          <SearchBar onSubmit={props.onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
