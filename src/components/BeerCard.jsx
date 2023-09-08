import React from "react";

function BeerCard({ beer }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg flex flex-col p-5">
      <img className="w-full h-56 object-contain" src={beer.image_url} alt={beer.name} />
      <div className="flex-grow px-6 py-4">
        <div className="font-bold text-xl mb-2">{beer.name}</div>
        <p className="text-gray-700 text-base">{beer.tagline}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {beer.abv}% ABV
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {beer.ibu} IBU
        </span>
      </div>
    </div>
  );
}

export default BeerCard;
