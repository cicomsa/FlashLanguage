import {SUBMIT, RESTORE} from '../actions/image'

export default function (state = null, action) {
  switch (action.type) {
    case SUBMIT:
      return action.payload

    case RESTORE:
      return null

    default:
      return state
  }
}
