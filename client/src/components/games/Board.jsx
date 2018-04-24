import React from 'react'
import './Board.css'
import {Link} from 'react-router-dom'


const test = true

const id = (Math.floor((Math.random() * 3) + 1)).toString()

const renderCel = (makeMove, rowIndex, cellIndex, symbol, hasTurn) => {

  return (
    <button
      className="board-tile"
      disabled={hasTurn}
      onClick={() => {if (test === true) makeMove(rowIndex, cellIndex)}}
      key={`${rowIndex}-${cellIndex}`}
    ><Link to ={`/images/${id}`}>{symbol || '_'}</Link></button>
  )
}

export default ({board, makeMove}) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((symbol, cellIndex) => renderCel(makeMove, rowIndex, cellIndex,symbol,false))}
  </div>
)