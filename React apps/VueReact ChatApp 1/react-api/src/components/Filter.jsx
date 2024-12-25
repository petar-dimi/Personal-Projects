// src/components/Filter.jsx
import React from 'react';

const Filter = ({ setDirector, setReleaseYear, setSortField, setSortOrder }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Director"
        onChange={(e) => setDirector(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by Release Year"
        onChange={(e) => setReleaseYear(e.target.value)}
      />
      <div>
        <label>Sort by:</label>
        <select onChange={(e) => setSortField(e.target.value)}>
          <option value="title">Title</option>
          <option value="releaseDate">Release Date</option>
        </select>
        <label>Order:</label>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
