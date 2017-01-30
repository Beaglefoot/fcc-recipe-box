export const CHOOSE_RECIPE = 'CHOOSE_RECIPE';

export function chooseRecipe(recipe) {
  return {
    type: CHOOSE_RECIPE,
    recipe
  };
}
