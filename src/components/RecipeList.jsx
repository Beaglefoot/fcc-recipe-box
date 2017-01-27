import React from 'react';

export default class RecipeList extends React.Component {
  render() {
    return (
      <div>
        <h2>Mock recipes</h2>
        <ul>
          <li>Soup</li>
          <li>Pasta</li>
          <li>Bread</li>
          <li>Pizza</li>
          <li>etc.</li>
        </ul>
      </div>
    );
  }
}
