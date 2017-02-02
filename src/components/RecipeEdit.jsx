import React from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createRecipe } from '../actions';
import RenderField from './RenderField';
import { chooseRecipeOnMount } from './RecipeShow';

class RecipeEdit extends React.Component {
  componentWillMount() {
    this.chosenRecipe = chooseRecipeOnMount(this.props);
  }

  onSubmit(props) {
    this.props.createRecipe(props);
    browserHistory.push('/');
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(props => this.onSubmit(props))}>
        <h3 className="text-center">Edit Recipe</h3>
        <div className="form-group">
          <Field
            component={RenderField}
            name="name"
            type="text"
            label="Name"
            content={this.chosenRecipe.name}
          />
        </div>
        <div className="form-group">
          <Field
            component={RenderField}
            name="ingredients"
            type="text"
            multiRow="true"
            label="Ingredients"
            content={this.chosenRecipe.ingredients}
          />
        </div>

        <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) errors.name = 'Enter a recipe name';
  if (!values.ingredients) errors.ingredients = 'Enter some ingredients';

  return errors;
}

const RecipeEditDecorated = reduxForm({
  form: 'RecipeEditForm',
  validate
})(RecipeEdit);

function mapStateToProps({ recipes }) {
  return { recipes: recipes.all };
}

export default connect(mapStateToProps, { createRecipe })(RecipeEditDecorated);
