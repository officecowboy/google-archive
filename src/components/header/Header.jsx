import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <div className="header">
      <div className="logo-search">
        <Logo />
        <SearchBar />
      </div>
      <img alt="" className="banner-gif" src={require("../../assets/mac-mall-1998.gif")}></img>
    </div>
  )
}