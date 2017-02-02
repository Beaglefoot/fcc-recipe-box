import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

class RecipeShow extends React.Component {
  componentWillMount() {
    const { recipes, routeParams } = this.props;
    const id = parseInt(routeParams.id);

    this.chosenRecipe = recipes.find(recipe => recipe.id === id) || '';
    this.chosenRecipe || browserHistory.push('/');
  }

  // shouldComponentUpdate() {
  //   return this.state.chosenRecipe;
  // }

  render() {
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
