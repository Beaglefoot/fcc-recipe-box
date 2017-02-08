import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../src/reducers';
import RecipeShow from '../../src/components/RecipeShow';
import { getRecipesStateFactory } from '../utility_functions';

describe('<RecipeShow />', () => {
  let store = createStore(reducer);
  let item;

  const getRecipesState = getRecipesStateFactory(store);

  beforeEach(() => {
    item = mount(
      <Provider store={store}>
        <RecipeShow routeParams={{ id: 5 }}/>
      </Provider>
    );
  });

  it('should render', () => {
    expect(item).to.exist;
  });

  it('should render recipe list with id: 5', () => {
    const recipe5 = getRecipesState().find(recipe => recipe.id === 5);
    expect(item.find('h3').first().text()).to.equal(recipe5.name);
  });

  it('should have Edit button', () => {
    expect(item.findWhere(el => (
      (el.type() === 'a' || el.type() === 'button') && el.text() === 'Edit'
    )).first()).to.exist;
  });

  it('should have Delete button', () => {
    expect(item.findWhere(el => (
      (el.type() === 'a' || el.type() === 'button') && el.text() === 'Delete'
    )).first()).to.exist;
  });

  it('should have Back To Recipe List button', () => {
    expect(item.findWhere(el => (
      (el.type() === 'a' || el.type() === 'button') && el.text() === 'Back To Recipe List'
    )).first()).to.exist;
  });

  it('should delete recipe on Delete button click', () => {
    const deleteButton = item.findWhere(el => (
      (el.type() === 'a' || el.type() === 'button') && el.text() === 'Delete'
    )).first();
    const initialStateRecipes = getRecipesState();

    deleteButton.simulate('click');

    const finalStateRecipes = getRecipesState();
    expect(initialStateRecipes.length - finalStateRecipes.length).to.equal(1);
  });
});
