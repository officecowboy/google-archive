import React from 'react'
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo-image" alt="" src={require("../assets/logos/GoogleLogo2000to5-5-2010.png")} />
      </Link>
    </div >
  )
}