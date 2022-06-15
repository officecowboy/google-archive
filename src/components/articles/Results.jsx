import React from 'react';

export default function Results({ date, articles }) {

  let count = 0
  articles.length === 44348 && date ?
    articles.map((article) => (
      article.pub_date.includes(`${date}`) &&
      count++
    ))
    :
    count = 0

  return (
    <div className="results">
      <div>Searched the NYT Technology Section on {date}</div>
      <div>{count} Results</div>
    </div>
  )
}
