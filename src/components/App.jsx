import React from 'react';
import Signature from './Signature';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Signature />
      </div>
    );
  }
}
