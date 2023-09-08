import React from "react";
import BeerCard from "./BeerCard";

function BeerList({ beers }) {
  return (
    <div className="flex flex-wrap justify-center">
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
}

export default BeerList;
