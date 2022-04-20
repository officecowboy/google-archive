import React, { useState, useEffect } from 'react';
import Results from './Results';
import Article from './Article';
import ArticlesFeed from './ArticlesFeed';
import SearchBar from '../SearchBar';
import './Articles.css';

export default function Articles({ articles, date, dateEntry, setDate }) {

  const [toggle, setToggle] = useState(false);


  return (
    <div className="right-column">
      <div className="searchbar-container">
        <SearchBar
          date={dateEntry}
          setDate={setDate} />
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