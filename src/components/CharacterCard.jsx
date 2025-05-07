import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character, onFavorite }) => (
  <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px' }}>
    <img src={character.image} alt={character.name} style={{ width: '100%' }} />
    <h3>{character.name}</h3>
    <p>Status: {character.status}</p>
    <button onClick={() => onFavorite(character)}>Add to Favorite</button>
    <br />
    <Link to={`/character/${character.id}`}><button>More Details</button></Link>
  </div>
);

export default CharacterCard;