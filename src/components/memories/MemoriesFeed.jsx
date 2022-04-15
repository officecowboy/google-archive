import React from 'react';
import Memory from './Memory';

export default function MemoriesFeed() {
  return (
    <div className="memories-feed">
      <div className="banner">Memories</div>
      <div className="memories-list">
        <Memory />
        <Memory />
        <Memory />
      </div>
    </div>
  )
}