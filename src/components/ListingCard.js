import React, {useState} from "react";

function ListingCard( {description, image, location} ) {

  const [isFavorited, setIsFavorited] = useState(false)

  function handleClick() {
    setIsFavorited(!isFavorited)
  }

  return (

    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
