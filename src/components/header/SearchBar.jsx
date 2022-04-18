import React, { useState } from 'react';

export default function SearchBar({ date, setDate, entry, setEntry }) {

  function handleChange(e) {
    setEntry(e.target.value)
  }

  function handleSubmit() {
    setDate(entry)
  }

  return (
    <div className="search">
      <input
        className="search-bar"
        type="text"
        defaultValue={date}
        onChange={handleChange}
        placeholder="Enter Date (MM-DD-YYYY)"
      />
      <input
        className="button"
        type="submit"
        onChange={handleSubmit}
        value="Search"
      />
    </div >
  )
}