import React from 'react';
import MemoriesFeed from './MemoriesFeed';
import MemoriesForm from './MemoriesForm';
import './Memories.css';

export default function Memories() {

  return (
    <div className="memories">
      <div className="memories-form-container">
        <MemoriesFeed />
        <MemoriesForm />
      </div>
      <img alt="" className="memories-gif" src={require("../../assets/panasonic-1998.gif")}></img>
    </div>
  )
}