import React from 'react'

export default function Warning() {
  return (
    <div className="warning-container">
      <img className="warning-icon" alt="" src={require("../assets/warning.png")} />
      <p className="warning-text">This site is low on memories</p>
    </div>
  )
}
