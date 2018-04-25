import React from 'react'
import './Board.css'
import {Link} from 'react-router-dom'
import {storeCell} from '../../actions/image'
import {connect} from 'react-redux'

const test = true

const id = (Math.floor((Math.random() * 3) + 1)).toString()

const renderCel = (storeCell, rowIndex, cellIndex, symbol, hasTurn) => {

storeCell = (rowIndex, cellIndex) => {
this.props.storeCell(rowIndex, cellIndex)
}
let whatever = ""
  return (
    <button
      className="board-tile"
      disabled={hasTurn}
      key={`${rowIndex}-${cellIndex}`}
      onClick={
      () => whatever = rowIndex

      }>
      { test && <Link to ={`/images/${id}`}>{symbol || '_'}</Link> }
      {console.log(rowIndex, cellIndex)}
      {console.log(whatever)}
      </button>
  )
}

const mapStateToProps = function (state) {
  return {
    currentCell : state.currentCell
  }
}


export default connect (mapStateToProps, {storeCell}) (({board, storeCell}) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((symbol, cellIndex) => renderCel(storeCell, rowIndex, cellIndex,symbol,false))}
  </div>
))
