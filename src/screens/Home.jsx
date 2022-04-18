import React from 'react';
import Logo from '../components/header/Logo';
import Search from '../components/header/Search';

export default function Home() {
  return (
    <div className="home-search-container">
      <div className="home-search">
        <Logo />
        <Search />
      </div>
    </div>
  )
}