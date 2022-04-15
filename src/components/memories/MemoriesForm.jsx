import React from 'react';

export default function MemoriesForm() {
  return (
    <div className="memories-form">
      <input
        className="memories-form-name"
        type="text"
        value=""
        placeholder="Name"
      />
      <input
        className="memories-form-text"
        id="MemoryFormText"
        placeholder="Please share a memory from this date!"
        type="text"
        value=""
      />
      <input
        className="button"
        type="submit"
        value="Submit"
      />
    </div>
  )
}