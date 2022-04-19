import React from 'react';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
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
      <div className="home-content">
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
        <div className="about">
          <p className="lead-about">Did you know that Google was originally called <a href="http://blogoscoped.com/archive/2007-12-28-n47.html" target="blank">Backrub</a>? In this digital archive, we trace the history of technology from the new millennium to the present.</p>
          <p>Enter a date from January 1, 2000 to today to view:</p>
          <ol>
            <li>That day's <a href="https://www.google.com/doodles" target="blank">Google Doodle</a>. If there’s no doodle to display, you’ll see the Google logo at that time.</li>
            <li><a href="https://www.nytimes.com/section/technology" target="blank">The New York Times</a> articles published in the Technology Section on that date.</li>
            <li>A user-generated catalog of memories from that date. Please add your own!</li>
          </ol>
        </div>
      </div>
    </div>
  )
}