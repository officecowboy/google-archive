import React from 'react';
import Results from './Results';
import Article from './Article';
import './Articles.css';

export default function Articles() {
  return (
    <div className="articles">
      <Results />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  )
}