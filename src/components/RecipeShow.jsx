import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class RecipeShow extends React.Component {
  render() {
    if (!this.chosenRecipe) {
      const { recipes, routeParams } = this.props;
      const id = parseInt(routeParams.id);

      this.chosenRecipe = recipes.find(recipe => recipe.id === id);
    }

    const { name, ingredients } = this.chosenRecipe;
    return (
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <Link to="/" className="btn btn-default">Back To Recipe List</Link>
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes: recipes.all };
}

export default connect(mapStateToProps)(RecipeShow);
