import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { chooseRecipe } from '../actions';

class RecipeShow extends React.Component {
  componentDidMount() {
    const { chooseRecipe, recipes, routeParams } = this.props;
    const id = parseInt(routeParams.id);

    chooseRecipe(recipes.find(recipe => recipe.id === id));
  }

  render() {
    if (!this.props.chosenRecipe) {
      return <div>Loading...</div>;
    }

    const { name, ingredients } = this.props.chosenRecipe;
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
  return {
    recipes: recipes.all,
    chosenRecipe: recipes.chosenRecipe
  };
}

export default connect(mapStateToProps, { chooseRecipe })(RecipeShow);
