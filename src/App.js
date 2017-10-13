import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SlopeChart from './components/slopechart/slope-chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SlopeChart/>
      </div>
    );
  }
}

export default App;
