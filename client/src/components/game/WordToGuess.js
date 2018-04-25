import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchImage} from '../../actions/image'
import {getGames, updateGame} from '../../actions/games'
import FormPage from './formPage'
import {Link} from 'react-router-dom'


class WordToGuess extends PureComponent {

    componentWillMount(props){
      this.props.fetchImage(this.props.match.params.imageid)
      this.props.getGames()
  }


  // makeMove = (toRow, toCell) => {
  //     const {game, updateGame, input, image } = this.props
  //
  //     const oldBoard = game.board
  //     const board = game.board.map(
  //         (row, rowIndex) => row.map((cell, cellIndex) => {
  //             if (rowIndex === toRow && cellIndex === toCell) return game.turn
  //             else return cell
  //         })
  //     )
  //     if(input === image.word) updateGame(game.id, board)
  //     else return updateGame(game.id, oldBoard)
  // }

  // handleBack() {
  //     const {currentCell} = this.props
  //
  //     this.makeMove(currentCell.row, currentCell.cell)
  //     window.history.go(-1);
  // }

    render() {
        const {game, updateGame, input, image, currentCell } = this.props

      return (
        <div>
        <img src={image.imageUrl} alt="dog" width="500px"></img>
        <Link to ={`/games/5`}>__</Link>
    
        <FormPage />
        <button onClick={() => console.log("nada")}>Next image</button>
        </div>
      )
    }
  }

  const mapStateToProps = function (state, props) {
    return {
        input: state.input,
        image:state.image,
        currentCell: state.currentCell,
        game: state.games && state.games[props.match.params.id]
    }
  }

  export default connect(mapStateToProps, {fetchImage, getGames, updateGame})(WordToGuess)
