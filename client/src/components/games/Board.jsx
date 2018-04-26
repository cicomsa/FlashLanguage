import React from 'react'
import './Board.css'
import {Link} from 'react-router-dom'

const id = (Math.floor((Math.random() * 3) + 1)).toString()

const renderCel = (makeMove, rowIndex, cellIndex, symbol, hasTurn, gameId) => {
  return (
     <button
      className="board-tile"
      disabled={hasTurn}
      onClick={() => {makeMove(rowIndex, cellIndex)}}
      key={`${rowIndex}-${cellIndex}`}
    >{symbol || '_'}</button>
  )
}
export default ({board, makeMove, gameId}) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((symbol, cellIndex) => renderCel(makeMove, rowIndex, cellIndex,symbol,false, gameId))}
  </div>
)
