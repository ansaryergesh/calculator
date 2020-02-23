/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Display.css';

class Display extends Component {
  render() {
    const { result } = this.props;
    return (
      <div>
        <input style={{ textAlign: 'right' }} type="text" value={result} disabled />
      </div>
    );
  }
}

Display.defaultProps = {
  result: '0',
};


Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
