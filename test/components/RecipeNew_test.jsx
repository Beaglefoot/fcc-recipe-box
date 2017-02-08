import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../src/reducers';
import RecipeNew from '../../src/components/RecipeNew';

describe('<RecipeNew />', () => {
  let store = createStore(reducer);
  let item;

  beforeEach(() => {
    item = mount(
      <Provider store={store}>
        <RecipeNew />
      </Provider>
    );
  });

  it('should render', () => {
    expect(item).to.exist;
  });

  it('should have input field with name "name"', () => {
    expect(item.find('input [name="name"]').first()).to.exist;
  });

  it('should have textare field with name "ingredients"', () => {
    expect(item.find('textarea [name="ingredients"]').first()).to.exist;
  });

  it('should add recipe to store on submitting new data', () => {
    const wrappedInput = item.find('input [name="name"]').first();
    const wrappedTextArea = item.find('textarea [name="ingredients"]').first();
    const wrappedForm = item.find('form').first();
    const initialStateRecipes = store.getState().recipes.all;

    wrappedInput.simulate('change', { target: { value: 'New Recipe' }});
    wrappedTextArea.simulate('change', { target: { value: 'some ingredients' }});
    wrappedForm.simulate('submit');

    const finalStateRecipes = store.getState().recipes.all;

    expect(finalStateRecipes.length - initialStateRecipes.length).to.equal(1);
    expect(finalStateRecipes.some(recipe => (
      recipe.name === 'New Recipe' && recipe.ingredients === 'some ingredients'
    ))).to.be.true;

    // Clean up to default store
    store = createStore(reducer);
  });
});
