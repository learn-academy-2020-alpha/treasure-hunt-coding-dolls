import React, { Component } from 'react';
import Board from './Component/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1> Treasure Hunt Game </h1>
          <Board />
      </div>
    );
  }
}

export default App;
