import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  const handleClick = () => {
    clickHandler(name);
  };
  const style = {
    width: wide ? '56%' : '25%',
    backgroundColor: color,
    cursor: 'pointer',
    fontSize: '22px',
  };

  return (
    <button type="button" className="buttonClick" style={style} onClick={handleClick}>
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  wide: false,
  color: 'orange',
  clickHandler: null,
};

export default Button;
