import React from 'react';
import Logo from './logo';
import Search from './search';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Search />
    </div>
  )
}