import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchImage} from '../../actions/image'
import FormPage from './formPage'


class WordToGuess extends PureComponent {

    componentWillMount(props){
      this.props.fetchImage(this.props.match.params.id)
  }

  makeMove = (toRow, toCell) => {
    const {game, updateGame, input, image } = this.props

    const oldBoard = game.board
    const board = game.board.map(
      (row, rowIndex) => row.map((cell, cellIndex) => {
        if (rowIndex === toRow && cellIndex === toCell) return game.turn
        else return cell
      })
    )
    if(input === image.word) updateGame(game.id, board)
    else return updateGame(game.id, oldBoard)
  }

  handleBack() {
      // const {game, updateGame} = this.props
      // const {image} = this.props
      // const {input} = this.props
      const {currentCell} = this.props
      //
      this.makeMove(currentCell.row, currentCell.cell)
      window.history.go(-1);
  }

    render() {
        const {image} = this.props

      return (
        <div>
        <img src={image.imageUrl} alt="dog" width="500px"></img>
        <FormPage />
        <button onClick={this.handleBack}>Next image</button>
        </div>
      )
    }
  }

  const mapStateToProps = function (state) {
    return {
        input: state.input,
      image:state.image,
      currentCell: state.currentCell,
      games: state.games
    }
  }

  export default connect(mapStateToProps, {fetchImage})(WordToGuess)
