import {FETCHED_IMAGE} from '../actions/image'

export default function (state = {}, action) {
  switch (action.type) {

      case FETCHED_IMAGE:
      return action.payload

    default:
      return state
  }
}
