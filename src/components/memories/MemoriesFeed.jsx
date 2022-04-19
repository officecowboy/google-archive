import React, { useEffect, useState } from 'react';
import Memory from './Memory';
import { deleteMemory, getMemory, updateMemory } from '../../services/memories';
import { getMemories } from "../../services/memories.js";

export default function MemoriesFeed(props) {
  const [memories, setMemories] = useState([]);
  const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    const fetchMemories = async () => {
      const response = await getMemories()
      setMemories(response)
    }

    fetchMemories()
  }, [toggle])

  return (
    <div className="memories-feed">
      <div className="banner">Memories from 05-08-2003</div>
      <div className="memories-list">
        {
          memories.length && memories.map((memory) => (
            <Memory setToggle={setToggle} key={memory._id} memoryData={memory}/>
          ))
        }
      </div>
    </div>
  )
}
