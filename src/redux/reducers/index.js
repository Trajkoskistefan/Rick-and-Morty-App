import { combineReducers } from 'redux';
import characterReducer from './characterReducer.js';

export default combineReducers({
  character: characterReducer
});
