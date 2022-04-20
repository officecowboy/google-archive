import React from 'react'

export default function Loading() {
  return (
    <div className="loading-container">
      <img className="loading-icon" alt="" src={require("../assets/requestProcessing.gif")} />
    </div>
  )
}