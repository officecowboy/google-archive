import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { updateMemory, getMemory } from "../../services/memories"


export default function MemoryEdit() {
  const [memory, setMemory] = useState({
    name: "",
    text: "",
  })
  
  const { id } = useParams()
  
  useEffect(() => {
    const fetchMemory = async () => {
      let aMemory = await getMemory(id)
      setMemory(aMemory)
    }
    fetchMemory()
  }, [id])
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setMemory({
      ...memory,
      [name]: value,
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateMemory(id, memory)
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
          value={memory.name}
          onChange={handleChange}
          required
        />
        <input
          className="memories-form-text"
          id="MemoryFormText"
          placeholder="Memory"
          type="text"
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
