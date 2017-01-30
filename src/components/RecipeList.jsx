import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class RecipeList extends React.Component {
  renderRecipes() {
    return this.props.recipes.map(recipe => (
      <li
        key={recipe.id}
        className="list-group-item"
      >
        <Link to={`recipe/${recipe.id}`}>{recipe.name}</Link>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <div>
          <Link to="recipe/new" className="btn btn-primary">
            Add Recipe
          </Link>
        </div>
        <h2>Mock recipes</h2>
        <ul className="list-group">
          {this.renderRecipes()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes: recipes.all };
}

export default connect(mapStateToProps)(RecipeList);
