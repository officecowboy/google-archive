import React from 'react';
import { useState } from 'react';
import { createMemory } from '../../services/memories'


export default function MemoriesForm({ setToggle }) {
  const [memory, setMemory] = useState({
    name: "",
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
    // setMemory(event.target.value)
    const response = await createMemory(memory)
    setToggle(prev => !prev)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="memories-form">
        <div className="memories-cta">
          Please add a memory!
        </div>
        <input
          className="memories-form-name"
          placeholder="Name"
          type="text"
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