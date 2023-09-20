import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {showListing, formData} ) {

  const filteredListing = showListing.filter(listing => 
    listing.description.toLowerCase().includes(formData.toLowerCase())
  )
  //console.log(filteredListing)
  
  const listings = filteredListing.map((listing) => (
    <ListingCard 
      key={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
    />
  ))

  return (

    <main>
      <ul className="cards">
        {listings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
