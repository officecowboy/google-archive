import React from 'react';
import Results from './Results';
import Article from './Article';
import SearchBar from '../SearchBar';
import './Articles.css';

export default function Articles({ date, setDate }) {
  return (
    <div className="right-column">
      <div className="searchbar-container">
        <SearchBar date={date} setDate={setDate} />
      </div>
      <div className="articles">
        <Results />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  )
}