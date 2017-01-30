import { combineReducers } from 'redux';
import reducerRecipes from './reducerRecipes';

export default combineReducers({
  recipes: reducerRecipes
});
