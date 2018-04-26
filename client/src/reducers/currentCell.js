import {STORE_CELL} from '../actions/image'

export default function (state = {}, action) {
  switch (action.type) {

      case STORE_CELL:
      console.log(action.payload)
      return action.payload

    default:
      return state
  }
}
