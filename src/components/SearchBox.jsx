import React, { useState } from 'react';
import '../App.css' ;

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Search about the constitution..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-box"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
