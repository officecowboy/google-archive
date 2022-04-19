import React from 'react';
import MemoriesFeed from './MemoriesFeed';
import MemoriesForm from './MemoriesForm';
import Logo from '../Logo';
import { useState, useEffect } from 'react';
import { getMemories } from '../../services/memories';
import './Memories.css';

export default function Memories({ date, dateSort, setDateSort, dateArray, setDateArray }) {

  const [memories, setMemories] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchMemories = async () => {
      const response = await getMemories()
      setMemories(response)
    }

    fetchMemories()
  }, [toggle])


  return (
    <div className="left-column">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="memories">
        <div className="memories-form-container">
          <MemoriesFeed
            memories={memories}
            setToggle={setToggle}
            date={date}
            dateSort={dateSort}
            setDateSort={setDateSort}
            dateArray={dateArray}
            setDateArray={setDateArray}
          />
          <MemoriesForm setToggle={setToggle} />
        </div>
        <img alt="" className="memories-gif" src={require("../../assets/panasonic-1998.gif")}></img>
      </div>
    </div>
  )
}