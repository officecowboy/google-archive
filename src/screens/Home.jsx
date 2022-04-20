import React from 'react';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';


export default function Home({ doodles, handleChange, dateEntry, setDate, dateSort, setDateSort, dateArray, setDateArray }) {

  return (
    <div className="home-search-container">
      <div className="home-content">
        <div className="home-search">
          <Logo doodles={doodles} />
          <SearchBar
            //onChange={handleChange}
            date={dateEntry}
            setDate={setDate}
            dateSort={dateSort}
            setDateSort={setDateSort}
            dateArray={dateArray}
            setDateArray={setDateArray}
          />
        </div>
        <div className="about-container">
          <div className="about">
            <p className="lead-about">Did you know that Google was originally named <a href="http://blogoscoped.com/archive/2007-12-28-n47.html" target="blank">Backrub</a>?<br /> Here on <a href="https://backrub.wiki/" target="blank">backrub.wiki</a>, we trace the history of technology from the new millennium to the present:</p>
            <ol>
              <li>Enter a date from January 1, 2000 - April 1, 2022 to view <a href="https://www.nytimes.com/section/technology" target="blank">The New York Times</a> articles published in the Technology Section on that date.</li>
              <li>Click on the Google logo to load a random <a href="https://www.google.com/doodles" target="blank">Google Doodle</a> from the past 20 years.</li>
              <li>Add your own memories on the search page!</li>
            </ol>
          </div>
        </div>
      </div>
    </div >
  )
}