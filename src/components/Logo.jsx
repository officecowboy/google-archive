import React from 'react'
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/"><img className="logo-image" alt="" src='//www.google.com/logos/2000/doodle_alien3.gif' />

      </Link>
    </div >
  )
}