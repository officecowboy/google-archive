import React, { useEffect, useState } from 'react';
import Memory from './Memory';
import Warning from '../Warning';
import { getMemories } from "../../services/memories.js";

export default function MemoriesFeed({ memories, setToggle, date, dateSort, setDateSort, dateArray, setDateArray }) {

  useEffect(() => {
    console.log(date)
    // setDateArray(date.split("-"))
    // console.log(dateArray)
    // setDateSort(dateArray[1] + "-" + dateArray[2] + "-" + dateArray[0])
    // console.log(dateSort)
  }, [setToggle])

  return (
    <div className="memories-feed">
      <div className="banner">Memories</div>
      <div className="memories-list">
        {/* <Warning /> */}
        {
          memories.length && memories.map((memory) => (
            // memory.createdAt.includes(date) &&
            <Memory setToggle={setToggle} key={memory._id} memoryData={memory} />
          ))
        }
      </div>
    </div>
  )
}