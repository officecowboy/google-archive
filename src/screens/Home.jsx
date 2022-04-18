import React from 'react';
import Logo from '../components/header/Logo';
import SearchBar from '../components/header/SearchBar';

export default function Home() {
  return (
    <div className="home-search-container">
      <div className="home-search">
        <Logo />
        <SearchBar />
      </div>
    </div>
  )
}