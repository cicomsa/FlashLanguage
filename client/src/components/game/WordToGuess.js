import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchImage} from '../../actions/image'
import FormPage from './formPage'


class WordToGuess extends PureComponent {

    componentWillMount(props){
      this.props.fetchImage(this.props.match.params.id)
  }

  handleBack() {
      const {game, updateGame} = this.props
      const {image} = this.props
      const {input} = this.props
      const {currentCell} = this.props


      function makeMove(toRow, toCell) {

        const board = game.board.map(
          (row, rowIndex) => row.map((cell, cellIndex) => {
            if (rowIndex === toRow && cellIndex === toCell) return game.turn
            else return cell
          })
        )
        console.log(input)
        if (input !== null) {
            if (input === image.word)
        }
        updateGame(game.id, board)

        else game.turn = {"x"? "o" : "x"}
      }

      makeMove(currentCell.row, currentCell.cell)
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
      game: state.game
    }
  }

  export default connect(mapStateToProps, {fetchImage})(WordToGuess)
