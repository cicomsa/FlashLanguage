import {FETCHED_IMAGE} from '../actions/image'

export default function (state = null, action) {
  switch (action.type) {
    case FETCHED_IMAGE:
    console.log(action.payload)
      return action.payload

    default:
      return state
  }
}
