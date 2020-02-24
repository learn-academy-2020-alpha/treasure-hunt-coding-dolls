import React, { Component } from 'react'
import Square from './Square'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["⚓️", "⚓️", "⚓️", "⚓️", "⚓️", "⚓️", "⚓️", "⚓️", "⚓️"],
      treasureLoc: Math.floor(Math.random() * 9),
      bombLoc: Math.floor(Math.random() * 9),
      treasure: "💰",
      tree: "🌊",
      bomb: "💣",
      counter: 5,
      message:""
    }
  }

  indexLocation = (index, count) => {
    let { board, treasureLoc, treasure, bombLoc, bomb, tree, message  } =  this.state;
    let newBoard = board;
    console.log(treasureLoc, bombLoc);
    if (treasureLoc === index) {
      newBoard[treasureLoc] = treasure
      this.setState({board: newBoard});
      this.setState({message: "You won!! $$$$"});
      setTimeout(() => window.location.reload(), 1500);
    }
    else if (bombLoc === index) {
      newBoard[bombLoc] = bomb
      this.setState({board:newBoard});
      this.setState({message: "Bombed! x__x"});
      setTimeout(() => window.location.reload(), 1500);
    }
    else if (count === 0) {
      this.setState({message: "You ran out of tries!"});
      setTimeout(() => window.location.reload(), 1500);
    }
    else {
      newBoard[index] = tree
      this.setState ({board: newBoard});
    }
      this.setState({counter:count});
  }

  resetGame = () => {
    window.location.reload();
  }


  render(){
    let square = this.state.board.map((value, index) => {
      return(
        <Square
          indexLocation={ this.indexLocation }
          key={ index }
          index={ index }
          value={ value }
          counter={this.state.counter}
          message = {this.state.message}
        />
      )
    });

    return(
      <div>
        <h2 id="counter" className="shadow"> Counter : {this.state.counter} </h2>
        <div id="board">
          { square }
        </div>
        <div>
        <button onClick={this.resetGame}>Reset Game</button>
        <h2 id="message"> {this.state.message}</h2>
        </div>
      </div>
    )
  }
}

export default Board
