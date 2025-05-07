import React from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from '../components/CharacterCard.jsx';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.character.favorites);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {favorites.map(char => (
        <CharacterCard key={char.id} character={char} onFavorite={() => {}} />
      ))}
    </div>
  );
};

export default FavoritesPage;
