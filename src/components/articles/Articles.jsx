import React, { useState, useEffect } from 'react';
import Results from './Results';
import Article from './Article';
import ArticlesFeed from './ArticlesFeed';
import SearchBar from '../SearchBar';
import { getArticles } from '../../services/articles'
import './Articles.css';

export default function Articles({date, dateEntry, setDate }) {

  const [articles, setArticles] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getArticles()
      setArticles(response)
      console.log(response)
    }

    fetchArticles()
  }, [toggle])


  return (
    <div className="right-column">
      <div className="searchbar-container">
        <SearchBar
          date={dateEntry}
          setDate={setDate} />
      </div>
      <div className="articles">
        <Results />
        <ArticlesFeed
          articles={articles}
          setToggle={setToggle}
          date={date}
        />
      </div>
    </div>
  )
}
