import React, { Component } from 'react'
import Square from './Square'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["⭐️", "⭐️", "⭐️", "⭐️", "⭐️", "⭐️", "⭐️", "⭐️", "⭐️"]
    }
  }

  indexGrabber = (index) => {
    let { board } = this.state;
    // when a square is clicked, a tree/treasure/bomb icon appears
    // randomize number
    let ranNum = Math.floor(Math.random() * board.length);

  //create a new array with all possible icons. ex. 7 trees & 1 treasure chest & 1 bomb.
  
  //upon click, trigger math.random to choose an index number which corrosponds to a value in allIconArray


    let newBoard = this.state.board[index];
    this.state.board[index] = "🌲";
    this.setState({ newBoard: "🌲" })

  }

  render(){
    let square = this.state.board.map((value, index) => {
      return(
        <Square
          indexGrabber={ this.indexGrabber }
          key={ index }
          index={ index }
          value={ value }
          placeholder={""}
        />
      )
    })
    return(
      <div id="board">
        { square }
      </div>
    )
  }
}

export default Board
