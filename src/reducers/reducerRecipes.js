import { CHOOSE_RECIPE } from '../actions';

const INITIAL_STATE = {
  all: [
    {
      name: 'Pie',
      ingredients: 'flour',
      id: 1
    },
    {
      name: 'Soup',
      ingredients: 'water',
      id: 2
    }
  ],
  chosenRecipe: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case CHOOSE_RECIPE:
    return Object.assign({}, state, { chosenRecipe: action.recipe });
  default:
    return state;
  }
}
