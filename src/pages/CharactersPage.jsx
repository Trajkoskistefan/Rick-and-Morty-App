import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters, addToFavorites } from '../redux/actions';
import CharacterCard from '../components/CharacterCard.jsx';

const CharactersPage = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.character.characters);
  const searchTerm = useSelector(state => state.character.searchTerm);

  useEffect(() => {
    dispatch(fetchCharacters(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {characters.map(char => (
        <CharacterCard key={char.id} character={char} onFavorite={(char) => dispatch(addToFavorites(char))} />
      ))}
    </div>
  );
};

export default CharactersPage;