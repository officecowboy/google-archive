import React from 'react';
import Logo from '../components/header/Logo';
import SearchBar from '../components/header/SearchBar';
import { useNavigate } from 'react-router-dom';


export default function Home({ date, setDate, dateSort, setDateSort, dateArray, setDateArray }) {

  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    await
      navigate("/search", { replace: true })
  }

  return (
    <div className="home-search-container">
      <div className="home-search">
        <Logo />
        <form onSubmit={handleSubmit}>
          <SearchBar
            date={date}
            setDate={setDate}
            dateSort={dateSort}
            setDateSort={setDateSort}
            dateArray={dateArray}
            setDateArray={setDateArray}
          />
        </form>
      </div>
    </div>
  )
}