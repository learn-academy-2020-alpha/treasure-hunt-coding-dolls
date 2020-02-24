import React, { Component } from 'react';
import Board from './Component/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1 className="shadow"> Treasure Hunt Game </h1>
          <Board />
        <footer> A Coding Dolls Production © 2020 </footer>  
      </div>
    );
  }
}

export default App;
