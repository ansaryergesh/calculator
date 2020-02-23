import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  const style = {
    width: wide ? '50%' : '25%',
    backgroundColor: color,
    cursor: 'pointer',
  };
  return (
    <button type="button" className="buttonClick" style={style}>
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
  color: 'light-gray',
};

export default Button;
