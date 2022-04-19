import React, { useState } from 'react';

export default function SearchBar({ date, setDate }) {

  function handleChange(e) {
    setDate(e.target.value)
  }

  return (
    <div className="search">
      <input
        className="search-bar"
        type="date"
        value={date}
        onChange={handleChange}
      />
      <input
        className="button"
        type="submit"
        value="Search"
      />
    </div >
  )
}