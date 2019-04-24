import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  let { searchResults } = props;

  return (
    <div className="search">
      <input type="text" onInput={searchResults} />
      <div>
        <input type="checkbox" id="search" />
        <label htmlFor="search">only show products in stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
