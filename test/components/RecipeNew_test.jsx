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
    expect(item.find('textare [name="ingredients"]').first()).to.exist;
  });
});
