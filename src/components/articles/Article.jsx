import React from 'react';
import { useState } from 'react';

export default function Article({ article }) {
  // const [currentArticle, setCurrentArticle] = useState({
  //   headline: article.headline,
  //   abstract: article.abstract,
  //   web_url: article.web_url
  // })

  return (
    <div className="article">
      <a href={`${article.web_url}`} className="headline">
        {article.headline}
      </a>
      <p className="abstract">
        {article.abstract}
      </p>
      <a href={`${article.web_url}`} className="link">
        {article.web_url}
      </a>
    </div>
  )
}