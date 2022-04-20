import React, { useEffect, useState } from 'react';
import Article from './Article';

export default function ArticlesFeed({ articles, setToggle, date, dateArray }) {
  console.log(date)
  return (
    <div>
      {
        articles.map((article) => (
          article.pub_date.includes(date.toString()) &&
          <Article article={article} key={article._id} />
      ))
      }
      <div>Articles from {date.toString()}</div>
    </div>
  )
}