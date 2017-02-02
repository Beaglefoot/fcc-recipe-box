export const CREATE_RECIPE = 'CREATE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';

export function createRecipe(recipe) {
  return {
    type: CREATE_RECIPE,
    recipe
  };
}

export function editRecipe(recipe) {
  return {
    type: EDIT_RECIPE,
    recipe
  };
}
