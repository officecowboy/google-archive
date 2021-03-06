import React from 'react';
import { useState } from 'react';
import { createMemory } from '../../services/memories'


export default function MemoriesForm({ setToggle }) {
  const [memory, setMemory] = useState({
    name: "2000-01-01",
    text: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setMemory({
      ...memory,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await createMemory(memory)
    setToggle(prev => !prev)
    setMemory({
      name: "2000-01-01",
      text: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="memories-form">
        <div className="memories-cta">
          Please add a memory!
        </div>
        <input
          className="memories-form-name"
          placeholder=""
          type="date"
          name="name"
          value={memory.name}
          onChange={handleChange}
          required
        />
        <textarea
          className="memories-form-text"
          id="MemoryFormText"
          placeholder="Share your memory here..."
          type="text"
          name="text"
          value={memory.text}
          onChange={handleChange}
          required
        />
        <input
          className="button"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  )
}