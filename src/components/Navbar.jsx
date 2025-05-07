import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';

const Navbar = () => (
  <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#eee', alignItems: 'center' }}>
    <Link to="/characters">Characters</Link>
    <Link to="/favorites">Favorites</Link>
    <SearchBar />
  </nav>
);

export default Navbar;
