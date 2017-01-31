import { CREATE_RECIPE } from '../actions';

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
  ]
};

export default function(state = INITIAL_STATE, action) {
  if (!action) return state;

  switch(action.type) {
  case CREATE_RECIPE:
    return Object.assign(
      {},
      state,
      { all: state.all.concat(action.recipe) }
    );
  default:
    return state;
  }
}
