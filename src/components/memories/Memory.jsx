import React from 'react';
import { deleteMemory, getMemory, updateMemory } from '../../services/memories';

export default function Memory({ memory }) {

  return (
    <div className="memory">
      <p className="memory-text">{memory.text}</p>
      <div className="memory-info">
        <p className="memory-name">
          Posted by {memory.name}
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