import React from 'react'
import './Board.css'
import {Link} from 'react-router-dom'

const id = (Math.floor((Math.random() * 3) + 1)).toString()

const renderCel = (makeMove, rowIndex, cellIndex, symbol, hasTurn, gameId, fetchImage, restore) => {
  return (
     <button
      className="board-tile"
      disabled={hasTurn}
      onClick={() => {makeMove(rowIndex, cellIndex) ; fetchImage(Math.floor(Math.random() * 6) + 1); restore()}}
      key={`${rowIndex}-${cellIndex}`}
    >{symbol || "_"}</button>
  )
}
export default ({board, makeMove, gameId, fetchImage, restore}) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((symbol, cellIndex) => renderCel(makeMove, rowIndex, cellIndex,symbol,false, gameId, fetchImage, restore))}
  </div>
)
