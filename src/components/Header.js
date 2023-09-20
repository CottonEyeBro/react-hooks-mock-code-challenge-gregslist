import React from "react";
import Search from "./Search";

function Header( {searchListing, setSearchListing, setFormData} ) {

  return (

    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchListing={searchListing} setSearchListing={setSearchListing} setFormData={setFormData} />
    </header>
  );
}

export default Header;
