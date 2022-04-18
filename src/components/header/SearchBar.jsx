import React from 'react';

export default function SearchBar({ date, setDate }) {

  function handleChange(e) {
    setDate(e.target.value)
  }

  return (
    <div className="search">
      <input
        className="search-bar"
        type="text"
        value={date}
        onChange={handleChange}
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