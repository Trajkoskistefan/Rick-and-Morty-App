import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.character.searchTerm);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search characters..."
      value={searchTerm}
      onChange={handleChange}
      style={{ padding: '5px', marginLeft: '10px' }}
    />
  );
};

export default SearchBar;