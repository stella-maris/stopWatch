import React, { Component } from 'react';
import logo from './logo.svg';
import StopWatch from './StopWatch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StopWatch increment={1}/>
      </div>
    );
  }
}

export default App;
