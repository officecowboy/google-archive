import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ date, setDate }) {
  const [dateEntry, setDateEntry] = useState('2000-01-01')

  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    await setDate(dateEntry)
    navigate("/search", { replace: true })
  }

  function handleChange(e) {
    setDateEntry(e.target.value)
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="date"
          value={dateEntry}
          onChange={handleChange}
          required
        />
        <input
          onSubmit={handleSubmit}
          className="button"
          type="submit"
          value="Search"
        />
      </form>
    </div >
  )
}