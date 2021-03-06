import React from 'react'
import { useState } from 'react';
import '../App.css';

export default function Logo({ doodles }) {

  const [randomDoodle, setRandomDoodle] = useState("https://www.google.com/logos/2013/500th_anniversary_of_the_piri_reis_map-1696005-hp.jpg")

  function randomUrl() {
    setRandomDoodle(doodles[Math.floor(Math.random() * doodles.length)].url)
    console.log(randomDoodle)
  }


  return (
    <div className="logo">
      {
        doodles.length === 5284 ?
          <img className="logo-image" alt="" src={randomDoodle} onClick={() => randomUrl()} />
          :
          <img className="logo-image" alt="" src={randomDoodle} />
      }
    </div >
  )
}