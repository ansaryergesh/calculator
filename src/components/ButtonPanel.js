/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
/* eslint-disable react/static-property-placement */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="ButtonPanel">
        <div className="Button-group">
          <Button name="AC" color="light-gray" clickHandler={this.handleClick} />
          <Button name="+/-" color="light-gray" clickHandler={this.handleClick} />
          <Button name="%" color="light-gray" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} />
        </div>
        <div className="Button-group">
          <Button name="7" color="light-gray" clickHandler={this.handleClick} />
          <Button name="8" color="light-gray" clickHandler={this.handleClick} />
          <Button name="9" color="light-gray" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} />
        </div>
        <div className="Button-group">
          <Button name="4" color="light-gray" clickHandler={this.handleClick} />
          <Button name="5" color="light-gray" clickHandler={this.handleClick} />
          <Button name="6" color="light-gray" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} />
        </div>
        <div className="Button-group">
          <Button name="1" color="light-gray" clickHandler={this.handleClick} />
          <Button name="2" color="light-gray" clickHandler={this.handleClick} />
          <Button name="3" color="light-gray" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} />
        </div>
        <div className="Button-group">
          <Button wide name="0" color="light-gray" clickHandler={this.handleClick} />
          <Button name="." color="light-gray" clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
