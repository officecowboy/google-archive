import React from 'react';

export default function MemoriesForm() {
  return (
    <div className="memories-form">
      <div className="memories-cta">
        Please add a memory!
      </div>
      <input
        className="memories-form-name"
        type="text"
        defaultValue=""
        placeholder="Name"
      />
      <textarea
        className="memories-form-text"
        id="MemoryFormText"
        placeholder="Memory"
        type="text"
        defaultValue=""
      />
      <input
        className="button"
        type="submit"
        defaultValue="Submit"
      />
    </div>
  )
}