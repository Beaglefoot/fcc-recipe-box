import React from 'react';

export default class RenderField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.content || '' };
  }

  render() {
    const { input, label, type, meta: { touched, error }, multiRow, placeholder } = this.props;

    return (
      <div>
        <label>{label}</label>
        <div>
          {
            multiRow &&
              <textarea
                className="form-control"
                {...input}
                type={type}
                rows="5"
                placeholder={placeholder}
                value={this.state.value}
                onChange={event => this.setState({ value: event.target.value })}
              /> ||
              <input
                className="form-control"
                {...input}
                type={type}
                placeholder={placeholder}
                value={this.state.value}
                onChange={event => this.setState({ value: event.target.value })}
              />
          }
          {touched && error && <span className="text-danger">{error}</span>}
        </div>
      </div>
    );
  }
}
