import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getGames, joinGame, updateGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {storeCell, fetchImage} from '../../actions/image'
import {userId} from '../../jwt'
import Paper from 'material-ui/Paper'
import Board from './Board'
import FormPage from '../game/formPage'
import './GameDetails.css'

const id = (Math.floor((Math.random() * 3) + 1)).toString()

class GameDetails extends PureComponent {

  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.game === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
     this.props.fetchImage(id)
    }
  }

  fetchImage = (id) => {
      this.props.fetchImage(id)
  }

  joinGame = () => this.props.joinGame(this.props.game.id)

  storeCell = (row, cell) => this.props.storeCell(row, cell)

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

  render() {
    const {game, users, authenticated, userId, input, image} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (game === null || users === null) return 'Loading...'
    if (!game) return 'Not found'

    const player = game.players.find(p => p.userId === userId)

    const winner = game.players
      .filter(p => p.symbol === game.winner)
      .map(p => p.userId)[0]

    return (<Paper className="outer-paper">
      <h1>Game #{game.id}</h1>

      <p>Status: {game.status}</p>

      {
        game.status === 'started' &&
        player && player.symbol === game.turn &&
        <div>
        <p>Its your turn!</p>
        <FormPage/>
        <img src={image.imageUrl} alt="dog" width="500px"></img>
        { input !== null ? (input === image.word? <p>Raspuns corect, now play the game!</p>: <p>Raspuns gresit</p>) : <p></p> }

        </div>
      }

      {
        game.status === 'pending' &&
        game.players.map(p => p.userId).indexOf(userId) === -1 &&
        <button onClick={this.joinGame}>Join Game</button>
      }

      {
        winner &&
        <p>Winner: {users[winner].firstName}</p>
      }

      <hr />

      {
        input !== null &&
        game.status !== 'pending' &&
        <div>
        <p>If you got it right, you''ll conquer the cell, if not, go back to learn your vocabulary. Give it a go:</p>
        <Board board={game.board} gameId = {game.id} makeMove={this.makeMove} fetchImage={this.fetchImage} />

        </div>
      }

    </Paper>)
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  game: state.games && state.games[props.match.params.id],
  users: state.users,
  input: state.input,
  image: state.image
})

const mapDispatchToProps = {
  getGames, getUsers, joinGame, updateGame, fetchImage
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails)
