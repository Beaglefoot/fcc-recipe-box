import React from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { replaceRecipe } from '../actions';
import RenderField from './RenderField';
import { chooseRecipeOnMount } from './RecipeShow';

const checkValueExistence = value => value ? undefined : 'Required';

class RecipeEdit extends React.Component {
  componentWillMount() {
    this.chosenRecipe = chooseRecipeOnMount(this.props);
  }

  componentDidMount() {
    // Assign default values for redux-form,
    // which will be used on validation
    this.props.initialize(this.chosenRecipe);
  }

  onSubmit(props) {
    const id = parseInt(this.props.routeParams.id);
    this.props.replaceRecipe(Object.assign({}, props, { id }));
    browserHistory.push('/');
  }

  render() {
    const { handleSubmit } = this.props;

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
            validate={checkValueExistence}
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
            validate={checkValueExistence}
          />
        </div>

        <button className="btn btn-primary" type="submit">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

const RecipeEditDecorated = reduxForm({
  form: 'RecipeEditForm'
})(RecipeEdit);

function mapStateToProps({ recipes }) {
  return { recipes: recipes.all };
}

export default connect(mapStateToProps, { replaceRecipe })(RecipeEditDecorated);
