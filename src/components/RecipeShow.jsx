import React from 'react';
import { connect } from 'react-redux';

class RecipeShow extends React.Component {
  render() {
    const { name, ingredients } = this.props.chosenRecipe;
    return (
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { chosenRecipe: recipes.chosenRecipe };
}

export default connect(mapStateToProps)(RecipeShow);
