export const getRecipesStateFactory = store => (
  () => store.getState().recipes.all
);
