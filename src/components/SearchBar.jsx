import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-center items-center space-x-4 mb-4">
      <form>
        <input
          className="w-30 px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search beers..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </form>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
