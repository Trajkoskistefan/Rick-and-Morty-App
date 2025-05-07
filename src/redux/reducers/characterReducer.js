const initialState = {
  characters: [],
  favorites: [],
  searchTerm: '',
  selectedCharacter: null
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'SET_SELECTED_CHARACTER':
      return { ...state, selectedCharacter: action.payload };
    default:
      return state;
  }
};

export default characterReducer;
