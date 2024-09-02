import React from 'react';
import '../App.css'; // Make sure this path points to the correct location of your CSS file

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <p>No results found.</p>; // Optional: display a message if no results are found
  }

  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div key={index} className="result-item">
          <h3>
            <a href={result.link} target="_blank" rel="noopener noreferrer">
              {result.title}
            </a>
          </h3>
          <p>{result.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
