import React from 'react';
import MemoriesFeed from './MemoriesFeed';
import MemoriesForm from './MemoriesForm';
import Logo from '../Logo';
import { useState, useEffect } from 'react';
import { getMemories } from '../../services/memories';
import './Memories.css';
import '../../App.css';

export default function Memories({ doodles, date, dateSort, setDateSort, dateArray, setDateArray, dateEntry, setDateEntry }) {

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
        <Logo doodles={doodles} />
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
            dateEntry={dateEntry}
            setDateEntry={setDateEntry}
          />
          <MemoriesForm setToggle={setToggle} />
        </div>
        <div className="tags">
          <img alt="" className="netscape" src={require("../../assets/netscape-2000.gif")}></img>
          <img alt="" className="flash" src={require("../../assets/macromedia-2000.gif")}></img>
          <img alt="" className="quicktime" src={require("../../assets/quicktime-4-0-2000.gif")}></img>        </div>
      </div>
    </div>
  )
}