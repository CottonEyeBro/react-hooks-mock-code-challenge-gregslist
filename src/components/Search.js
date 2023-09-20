import React, {useState} from "react";

function Search( {searchListing, setSearchListing, setFormData} ) {

  //console.log(searchListing)

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submitted");
    setFormData(searchListing)
    setSearchListing("")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchListing}
        onChange={(e) => setSearchListing(e.target.value)}
      />
      <button type="submit">🔍</button>
      <button onClick={() => setSearchListing("")}>Clear</button>
    </form>
  );
}

export default Search;
