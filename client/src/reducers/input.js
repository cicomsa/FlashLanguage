import {SUBMIT} from '../actions/image'

export default function (state = null, action) {
  switch (action.type) {
    case SUBMIT:
    console.log(action.payload)
      return action.payload

    default:
      return state
  }
}
