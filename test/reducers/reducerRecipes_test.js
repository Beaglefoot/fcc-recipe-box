import { expect } from 'chai';
import reducer from '../../src/reducers/reducerRecipes';
import { CREATE_RECIPE } from '../../src/actions';

describe('reducerRecipes', () => {
  it('should return default state', () => {
    expect(reducer()).to.include.keys('all');
  });

  it('should create new recipe', () => {
    const initialState = {
      all: [{
        name: 'Pie',
        ingredients: 'flour',
        id: 8
      }]
    };

    const action = {
      type: CREATE_RECIPE,
      recipe: {
        name: 'Salad',
        ingredients: 'tomatoes',
      }
    };

    const finalState = reducer(initialState, action);

    expect(finalState).to.deep.equal({
      all: [
        {
          name: 'Pie',
          ingredients: 'flour',
          id: 8
        },
        {
          name: 'Salad',
          ingredients: 'tomatoes',
          id: 9
        }
      ]
    });
  });

  it('should create recipe with a valid ID', () => {
    const initialState = {
      all: [
        {
          name: 'Pie',
          ingredients: 'flour',
          id: 2
        },
        {
          name: 'Salad',
          ingredients: 'tomatoes',
          id: 1
        }
      ]
    };

    const action = {
      type: CREATE_RECIPE,
      recipe: {
        name: 'Pasta',
        ingredients: 'macaroni',
      }
    };

    const finalState = reducer(initialState, action);
    const newRecipeID = finalState.all.find(recipe => (
      recipe.name === 'Pasta'
    )).id;

    expect(
      initialState.all
      .map(recipe => recipe.id)
      .includes(newRecipeID)
    ).to.not.equal(true);
  });
});
