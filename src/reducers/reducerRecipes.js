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
  switch(action.type) {
  default:
    return state;
  }
}
