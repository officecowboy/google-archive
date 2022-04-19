import React from 'react';
import MemoriesFeed from './MemoriesFeed';
import MemoriesForm from './MemoriesForm';
import './Memories.css';

export default function Memories({ date, dateSort, setDateSort, dateArray, setDateArray }) {
  return (
    <div className="memories">
      <div className="memories-form-container">
        <MemoriesFeed
          date={date}
          dateSort={dateSort}
          setDateSort={setDateSort}
          dateArray={dateArray}
          setDateArray={setDateArray}
        />
        <MemoriesForm />
      </div>
      <img alt="" className="memories-gif" src={require("../../assets/panasonic-1998.gif")}></img>
    </div>
  )
}