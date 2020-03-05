/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

export default class Display extends React.Component {
  static propTypes = {
    result: PropTypes.string,
  };

  render() {
    return (
      <div className="Display">
        <div className="resultPanel">{this.props.result}</div>
      </div>
    );
  }
}
