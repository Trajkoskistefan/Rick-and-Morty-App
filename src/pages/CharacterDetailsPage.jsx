import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../redux/actions';

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector(state => state.character.selectedCharacter);

  useEffect(() => {
    dispatch(fetchCharacterById(id));
  }, [dispatch, id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
    </div>
  );
};

export default CharacterDetailsPage;