import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

function findRecipe(recipes, id) {
  return recipes.find(recipe => recipe.id === id) || '';
}

export function chooseRecipeOnMount(props) {
  const { recipes, routeParams } = props;
  const id = parseInt(routeParams.id);
  const chosenRecipe = findRecipe(recipes, id);

  chosenRecipe || browserHistory.push('/');

  return chosenRecipe;
}

class RecipeShow extends React.Component {
  componentWillMount() {
    this.chosenRecipe = chooseRecipeOnMount(this.props);
  }

  render() {
    console.log(`${this.props.location.pathname}`);
    const { name, ingredients } = this.chosenRecipe;

    return (
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <Link to={`${this.props.location.pathname}/edit`} className="btn btn-warning">Edit</Link>
        <Link to="/" className="btn btn-default">Back To Recipe List</Link>
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes: recipes.all };
}

export default connect(mapStateToProps)(RecipeShow);
