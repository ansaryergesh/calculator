import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <div className="ButtonPanel">
      <div className="Button-group">
        <Button name="AC" color="light-gray" clickHandler={handleClick} />
        <Button name="+/-" color="light-gray" clickHandler={handleClick} />
        <Button name="%" color="light-gray" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="Button-group">
        <Button name="7" color="light-gray" clickHandler={handleClick} />
        <Button name="8" color="light-gray" clickHandler={handleClick} />
        <Button name="9" color="light-gray" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} />
      </div>
      <div className="Button-group">
        <Button name="4" color="light-gray" clickHandler={handleClick} />
        <Button name="5" color="light-gray" clickHandler={handleClick} />
        <Button name="6" color="light-gray" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="Button-group">
        <Button name="1" color="light-gray" clickHandler={handleClick} />
        <Button name="2" color="light-gray" clickHandler={handleClick} />
        <Button name="3" color="light-gray" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="Button-group">
        <Button wide name="0" color="light-gray" clickHandler={handleClick} />
        <Button name="." color="light-gray" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

export default ButtonPanel;
