import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  const style = {
    wide: wide? '50%' : '25%',
    backgroundColor: color,
  }
  return (
    <button type="button" style={style}>
      {name}
    </button>
  );
};
  
Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  color: 'gray',
}
  
export default Button;
