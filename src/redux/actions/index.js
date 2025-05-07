import axios from 'axios';

export const fetchCharacters = (searchTerm = '') => async dispatch => {
  const url = `https://rickandmortyapi.com/api/character?name=${searchTerm}`;
  const response = await axios.get(url);
  dispatch({ type: 'SET_CHARACTERS', payload: response.data.results });
};

export const setSearchTerm = term => ({
  type: 'SET_SEARCH_TERM',
  payload: term
});

export const addToFavorites = character => ({
  type: 'ADD_TO_FAVORITES',
  payload: character
});

export const fetchCharacterById = id => async dispatch => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  dispatch({ type: 'SET_SELECTED_CHARACTER', payload: response.data });
};
