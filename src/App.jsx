import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import CharactersPage from './pages/CharactersPage.jsx';
import CharacterDetailsPage from './pages/CharacterDetailsPage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/characters" />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/character/:id" element={<CharacterDetailsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  </div>
);

export default App;