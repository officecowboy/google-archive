import React from 'react';
import Logo from './Logo';
import Search from './Search';

export default function Header() {
  return (
    <div className="header">
      <div className="logo-search">
        <Logo />
        <Search />
      </div>
      <img alt="" className="banner-gif" src={require("../../assets/mac-mall-1998.gif")}></img>
    </div>
  )
}