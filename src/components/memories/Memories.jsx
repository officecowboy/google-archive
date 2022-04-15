import React from 'react';
import MemoriesFeed from './MemoriesFeed';
import MemoriesForm from './MemoriesForm';
import './Memories.css';

export default function Memories() {
  return (
    <div className="memories">
      <MemoriesFeed />
      <MemoriesForm />
    </div>
  )
}