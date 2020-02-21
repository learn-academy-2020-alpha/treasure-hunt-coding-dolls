import React, { Component } from 'react'
import Square from './Square'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["⭐️", "⭐️", "⭐️", "⭐️", "⭐️", "⭐️", "⭐️", "⭐️", "⭐️"],
      treasureLoc: Math.floor(Math.random() * 9),
      bombLoc: Math.floor(Math.random() * 9),
      treasure: "💰",
      tree: "🌲",
      bomb: "💣",
      counter: 5,
      message:""
    }
  }

  indexLocation = (index, count) => {
    let { board, treasureLoc, treasure, bombLoc, bomb, tree, message  } =  this.state;
      let newBoard = board;
    if (treasureLoc === index) {
      newBoard[treasureLoc] = treasure
      this.setState({newBoard: treasure});
      this.setState({message: "You won!! $$$$"})
    }
    else if (bombLoc === index) {
      newBoard[bombLoc] = bomb
      this.setState({newBoard:bomb});
      this.setState({message: "Bombed! x__x"})
          // alert()
    }
    else if (count === 0) {
      this.setState({message: "You ran out of tries!"})
    }
    else {
      newBoard[index] = tree
      this.setState ({newBoard: tree});
    }
      this.setState({counter:count});
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
        <h3> Counter : {this.state.counter} </h3>
        <div id="board">
          { square }
        </div>
        <div>
        <h2> {this.state.message}</h2>
        </div>
      </div>
    )
  }
}

export default Board
