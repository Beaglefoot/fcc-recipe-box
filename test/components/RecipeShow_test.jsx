import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import reducer from '../../src/reducers';
import RecipeShow from '../../src/components/RecipeShow';

describe('<RecipeShow />', () => {
  let store = createStore(reducer);
  let item;
  const routes = <Route path="recipe/:id" component={RecipeShow} />;

  beforeEach(() => {
    item = mount(
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  });

  it('should render', () => {
    expect(item).to.exist;
  });
});
