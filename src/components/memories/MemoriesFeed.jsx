import React, { useEffect, useState } from 'react';
import Memory from './Memory';
import Warning from '../Warning';
import { getMemories } from "../../services/memories.js";

export default function MemoriesFeed({ memories, setToggle, date, dateSort, setDateSort, dateArray, setDateArray, dateEntry }) {

  useEffect(() => {
    console.log(date)
    setDateArray(date.split("-"))
    console.log(dateArray)
    setDateSort(dateArray[1] + "-" + dateArray[2] + "-" + dateArray[0])
    console.log(dateSort)
  }, [date])

  return (
    <div className="memories-feed">
      <div className="banner">Memories from {date}</div>
      <div className="memories-list">
        {memories.length ?
          memories.map((memory) => (
            <Memory setToggle={setToggle} key={memory._id} memoryData={memory} />
          ))
          :
          <Warning />
        }
      </div>
    </div>
  )
}