import React, { useState } from 'react';
import Results from './Results';
import ArticlesFeed from './ArticlesFeed';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import './Articles.css';
import { Link } from 'react-router-dom';

export default function Articles({ doodles, articles, date, dateEntry, setDate }) {

  const [setToggle] = useState(false);


  return (
    <div className="right-column">
      <div className="searchbar-container">
        <div className="searchbar-container-2">
          <div className="logo-container-mobile">
            <Logo doodles={doodles} />
          </div>
          <SearchBar
            date={dateEntry}
            setDate={setDate} />
          <div className="search-links">
            <Link to="/"><div className="search-link">
              Return Home
            </div></Link>
            <div className="search-link">
              <a href="https://github.com/officecowboy/google-archive" target="blank" id="source">View Source</a>
            </div>
          </div>
        </div>
        <img alt="" className="banner-gif" src={require("../../assets/mac-mall-1998.gif")}></img>
      </div>
      <div className="articles">
        <Results
          date={date}
          articles={articles}
        />
        <ArticlesFeed
          articles={articles}
          setToggle={setToggle}
          date={date}
        />
      </div>
    </div>
  )
}