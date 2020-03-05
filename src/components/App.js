/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="App">
        <Display result={total || next || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
