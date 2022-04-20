import React, { useEffect, useState } from 'react';
import Article from './Article';
import Loading from '../Loading';

export default function ArticlesFeed({ articles, setToggle, date, dateArray }) {
  console.log(date)
  return (
    <div>
      {
        articles.length == 44348 ?
          articles.map((article) => (
            article.pub_date.includes(`${date}`) &&
            <Article article={article} key={article._id} />
          ))
          :
          <Loading />
      }
    </div>
  )
}