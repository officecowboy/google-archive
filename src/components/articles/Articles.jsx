import React, { useState, useEffect } from 'react';
import Results from './Results';
import Article from './Article';
import ArticlesFeed from './ArticlesFeed';
import SearchBar from '../SearchBar';
import './Articles.css';
import { Link } from 'react-router-dom';

export default function Articles({ articles, date, dateEntry, setDate }) {

  const [toggle, setToggle] = useState(false);


  return (
    <div className="right-column">
      <div className="searchbar-container">
        <div className="searchbar-container-2">
          <SearchBar
            date={dateEntry}
            setDate={setDate} />
          <div className="search-links">
            <Link to="/"><div className="search-link">
              Return Home
            </div></Link>
            <div className="search-link">
              <a href="https://github.com/officecowboy/google-archive" target="blank">View Source</a>
            </div>
          </div>
        </div>
        <img alt="" className="banner-gif" src={require("../../assets/mac-mall-1998.gif")}></img>
      </div>
      <div className="articles">
        <Results date={date} />
        <ArticlesFeed
          articles={articles}
          setToggle={setToggle}
          date={date}
        />
      </div>
    </div>
  )
}