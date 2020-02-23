import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = () => (
  <div className="ButtonPanel">
    <div className="Button-group">
      <Button name="AC" color="light-gray" />
      <Button name="+/-" color="light-gray" />
      <Button name="%" color="light-gray" />
      <Button name="÷" />
    </div>
    <div className="Button-group">
      <Button name="7" color="light-gray" />
      <Button name="8" color="light-gray" />
      <Button name="9" color="light-gray" />
      <Button name="x" />
    </div>
    <div className="Button-group">
      <Button name="4" color="light-gray" />
      <Button name="5" color="light-gray" />
      <Button name="6" color="light-gray" />
      <Button name="-" />
    </div>
    <div className="Button-group">
      <Button name="1" color="light-gray" />
      <Button name="2" color="light-gray" />
      <Button name="3" color="light-gray" />
      <Button name="+" />
    </div>
    <div className="Button-group">
      <Button wide name="0" color="light-gray" />
      <Button name="." color="light-gray" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
