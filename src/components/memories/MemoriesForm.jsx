import React from 'react';

export default function MemoriesForm() {
  return (
    <div className="memories-form">
      <input
        className="memories-name"
        type="text"
        value=""
        placeholder="Name"
      />
      <input
        className="memories-text"
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