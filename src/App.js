import React, { Component } from 'react';
import './App.css';

import CurrencyConverter from './components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Higher Order Components</h2>
        <CurrencyConverter />
      </div>
    );
  }
}

export default App;
