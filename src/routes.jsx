import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './components/App';
import RecipeList from './components/RecipeList';
import RecipeNew from './components/RecipeNew';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RecipeList} />
    <Route path="recipe/new" component={RecipeNew} />
    <Redirect from="*" to="/" />
  </Route>
);
