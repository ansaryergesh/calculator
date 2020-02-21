import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Display.css';

class Display extends Component {
    static defaultProps = {
      result: '0',
    };
    
    render() {
      return(
        <div>
          <input style ={{textAlign: 'right'}} type="text" value={this.props.result} disabled></input>
        </div>
      );
    }
}

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
