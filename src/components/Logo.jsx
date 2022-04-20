import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Logo({ doodles }) {

  const [randomDoodle, setRandomDoodle] = useState("//www.google.com/logos/2000/doodle_alien3.gif")

  function randomUrl() {
    setRandomDoodle(doodles[Math.floor(Math.random() * doodles.length)].url)
    console.log(randomDoodle)
  }

  return (
    <div className="logo">
      {
        doodles.length == 5284 ?
          <img className="logo-image" alt="" src={randomDoodle} onClick={() => randomUrl()} />
          :
          <img className="logo-image" alt="" src={randomDoodle} />
      }
    </div >
  )
}