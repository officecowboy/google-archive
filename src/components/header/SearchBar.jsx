import React from 'react';

export default function SearchBar({ date, setDate }) {

  return (
    <div className="search">
      <input
        className="search-bar"
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Enter Date (YYYY-MM-DD)"
      />
      <input
        className="button"
        type="submit"
        value="Search"
      />
    </div >
  )
}