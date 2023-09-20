import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [formData, setFormData] = useState("")
  const [showListing, setShowListing] = useState([])
  const [searchListing, setSearchListing] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((response) => response.json())
      .then((data) => setShowListing(data))
  }, [])

  return (
    <div className="app">
      <Header searchListing={searchListing} setSearchListing={setSearchListing} setFormData={setFormData} />
      <ListingsContainer showListing={showListing} formData={formData} />
    </div>
  );
}

export default App;
