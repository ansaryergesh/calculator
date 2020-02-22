import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  const style = {
    wide: wide? '50%' : '25%',
    backgroundColor: color,
    padding: "25px",
    cursor: "pointer"
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
  color: '#37C4D4',
}
  
export default Button;
