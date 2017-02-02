import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

export function findRecipe(recipes, id) {
  return recipes.find(recipe => recipe.id === id);
}

class RecipeShow extends React.Component {
  componentWillMount() {
    const { recipes, routeParams } = this.props;
    const id = parseInt(routeParams.id);

    this.chosenRecipe =  findRecipe(recipes, id) || '';
    this.chosenRecipe || browserHistory.push('/');
  }

  render() {
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
