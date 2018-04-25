import React from 'react'
import './Board.css'
import {Link} from 'react-router-dom'

const id = (Math.floor((Math.random() * 3) + 1)).toString()

const renderCel = (storeCell, rowIndex, cellIndex, symbol, hasTurn, gameId) => {
  return (
    <button
      className="board-tile"
      disabled={hasTurn}
      onClick={() => {storeCell(rowIndex, cellIndex)}}
      key={`${rowIndex}-${cellIndex}`}
    ><Link to ={`/games/${gameId}/images/${id}`}>{symbol || '_'}</Link></button>
  )
}
export default ({board, storeCell, gameId}) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((symbol, cellIndex) => renderCel(storeCell, rowIndex, cellIndex,symbol,false, gameId))}
  </div>
)
