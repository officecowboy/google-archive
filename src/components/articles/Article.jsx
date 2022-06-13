import React from 'react';

export default function Article({ article }) {

  return (
    <div className="article">
      <a href={`${article.web_url}`} className="headline" target="blank">
        {article.headline}
      </a>
      <p className="abstract">
        {article.abstract}
      </p>
      <a href={`${article.web_url}`} className="link" target="blank">
        {article.web_url}
      </a>
    </div>
  )
}