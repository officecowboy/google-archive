import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

export default function Header({ date, setDate }) {
  return (
    <div className="header">
      <div className="logo-search">
        <Link to="/">
          <Logo />
        </Link>
        <SearchBar date={date} setDate={setDate} />
      </div>
      <img alt="" className="banner-gif" src={require("../../assets/mac-mall-1998.gif")}></img>
    </div>
  )
}