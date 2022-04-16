import React from 'react';

export default function Memory() {
  return (
    <div className="memory">
      <p className="memory-text">
        Here is a sample memory that I had on this day in this year about the technology of the time.
      </p>
      <div className="memory-info">
        <p className="memory-name">
          Posted by Scott Diekema
        </p>
        <div className="memory-crud">
          <p>
            Edit
          </p>
          <p>
            Delete
          </p>
        </div>
      </div>
    </div>
  )
}