import React, { useState, useEffect } from 'react';
import { deleteMemory, updateMemory } from '../../services/memories';

export default function Memory({ memoryData, setToggle }) {
  const [memory, setMemory] = useState({
    name: memoryData.name,
    text: memoryData.text,
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setMemory({
      ...memory,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateMemory(memoryData._id, memory)
  }

  return (
    <div className="memory">
      <form className="memory-form" onSubmit={handleSubmit}>
        <textarea
          className="memory-text"
          type="text"
          name="text"
          value={memory.text}
          onChange={handleChange}
        />
        <div className="memory-info">
          <input
            className="memory-name"
            type="date"
            name="name"
            value={memory.name}
            onChange={handleChange}
          />
          <div className="memory-crud">
            <button className="memory-button" onClick={handleSubmit}>Update</button>
            <button className="memory-button" onClick={async () => {
              await deleteMemory(memoryData._id)
              setToggle(prev => !prev)
            }}>
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}