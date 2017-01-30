import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './components/App';
import RecipeList from './components/RecipeList';
import RecipeNew from './components/RecipeNew';
import RecipeShow from './components/RecipeShow';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RecipeList} />
    <Route path="recipe/new" component={RecipeNew} />
    <Route path="recipe/:id" component={RecipeShow} />
    <Redirect from="*" to="/" />
  </Route>
);
