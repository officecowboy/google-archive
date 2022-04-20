import React from 'react';

export default function Results({date}) {
  return (
    <div className="results">
      <div>Searched the NYT Technology Section on {date} </div>
      <div>Results 1-10 of 12</div>
    </div>
  )
}