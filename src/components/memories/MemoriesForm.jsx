import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMemory } from '../../services/memories'


export default function MemoriesForm() {
  const [memory, setMemory] = useState({
    name: "",
    text: "",
  })
  
  let navigate = useNavigate()

  const handleChange = (event) => {
    const {name, value} = event.target
    setMemory({
      ...memory,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // setMemory(event.target.value)
    const response = await createMemory(memory)
  }

  return (
    <div className="memories-form">
      <div className="memories-cta">
        Please add a memory!
      </div>
     <form onSubmit={handleSubmit}>    
      <input
        className="memories-form-name"
        placeholder="Name"
          type="text"
          name="name"
        value={memory.name}
        onChange={handleChange}
        required
      />
      <input
        className="memories-form-text"
        id="MemoryFormText"
        placeholder="Memory"
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
      </form>
    </div>
  )
}