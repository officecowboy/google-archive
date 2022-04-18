import React from 'react';

export default function SearchBar() {
  return (
    <div className="search">
      <input
        className="search-bar"
        type="text"
        value=""
        placeholder="Enter Date (MM-DD-YYYY)"
      />
      <input
        className="button"
        type="submit"
        value="Search"
      />
    </div >
  )
}