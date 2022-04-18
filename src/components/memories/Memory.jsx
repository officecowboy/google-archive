import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteMemory, getMemory, updateMemory } from '../../services/memories';
import MemoriesFeed from "./MemoriesFeed"

export default function Memory({memory}) {
  // const [memory, setMemory] = useState({})
  // let { id } = useParams()

  // useEffect(() => {
  //   const fetchMemory = async () => {
  //     let aMemory = await getMemory(id)
  //     setMemory(aMemory)
  //   }

  //   fetchMemory()
  // }, [id])

  return (
    <div className="memory">
      <p className="memory-text">{memory.text}</p>
      <div className="memory-info">
        <p className="memory-name">
          {memory.name}
        </p>
        <div className="memory-crud">
          <p onClick={() => {
            updateMemory(memory._id)
          }}>Edit</p>
          <p onClick={() => {
            deleteMemory(memory._id)
          }}>
            Delete
          </p>
        </div>
      </div>
    </div>
  )
}