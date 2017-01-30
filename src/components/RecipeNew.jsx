import React from 'react';
import { Link } from 'react-router';

export default class RecipeNew extends React.Component {
  render() {
    return (
      <form>
        <h3 className="text-center">Add A New Recipe</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter your recipe name"
          />
        </div>
        <div className="form-group">
          <label>Ingredients</label>
          <textarea
            className="form-control"
            placeholder="Enter your ingredients"
            rows="5"
          />
        </div>

        <button className="btn btn-primary" type="submit">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}
