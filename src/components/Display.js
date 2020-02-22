import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Display.css';

class Display extends Component {
  static defaultProps = {
    result: '0',
  };
    
    render() {
      return(
        <div className = "Display">
          <p className="resultPanel">{this.props.result}</p>
        </div>
      );
    }
}

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
