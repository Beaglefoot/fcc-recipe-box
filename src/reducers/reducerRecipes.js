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

function getNewID(state) {
  return state.all.reduce((maxID, e) => (
    e.id > maxID ? e.id : maxID
  ), 0) + 1;
}

function getRecipeWithNewID(recipe, state) {
  return Object.assign({}, recipe, { id: getNewID(state) });
}

export default function(state = INITIAL_STATE, action) {
  if (!action) return state;

  switch(action.type) {
  case CREATE_RECIPE:
    return Object.assign(
      {},
      state,
      { all: state.all.concat(getRecipeWithNewID(action.recipe, state)) }
    );
  default:
    return state;
  }
}
