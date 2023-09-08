import React, { useEffect, useState } from "react";
import axios from "axios";
import BeerList from "./components/BeerList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => {
        setBeers(response.data);
        setFilteredBeers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeers(filtered);
  };

  return (
    <div className="App">
      <h1>Beer Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <BeerList beers={filteredBeers} />
    </div>
  );
}

export default App;
