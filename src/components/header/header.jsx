import React from 'react';
import Logo from './Logo';
import Search from './Search';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Search />
    </div>
  )
}