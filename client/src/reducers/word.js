import {FETCHED_WORD} from '../actions/word'

export default function (state = null, action) {
  switch (action.type) {
    case FETCHED_WORD:
      return action.payload.word
    default:
      return state
  }
}