import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { deleteRecipe } from '../actions';

function findRecipe(recipes, id) {
  return recipes.find(recipe => recipe.id === id) || '';
}

export function chooseRecipeOnMount(props) {
  const { recipes, routeParams } = props;
  const id = parseInt(routeParams.id);
  const chosenRecipe = findRecipe(recipes, id);

  // In case someone attempts access non-existent
  // recipe via url
  chosenRecipe || browserHistory.push('/');

  return chosenRecipe;
}

class RecipeShow extends React.Component {
  componentWillMount() {
    this.chosenRecipe = chooseRecipeOnMount(this.props);
  }

  handleClick(id) {
    this.props.deleteRecipe(id);
    browserHistory.push('/');
  }

  render() {
    const { name, ingredients } = this.chosenRecipe;

    return (
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <Link to={`${location.pathname}/edit`} className="btn btn-warning">Edit</Link>
        <button
          className="btn btn-danger"
          onClick={() => this.handleClick(this.chosenRecipe.id)}
        >
          Delete
        </button>
        <Link to="/" className="btn btn-default">Back To Recipe List</Link>
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes: recipes.all };
}

export default connect(mapStateToProps, { deleteRecipe })(RecipeShow);
