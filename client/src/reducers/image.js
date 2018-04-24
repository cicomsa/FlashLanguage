import {FETCHED_IMAGE} from '../actions/image'
//import {FETCHED_WORD} from '../actions/image'

export default function (state = null, action) {
  switch (action.type) {
   
      case FETCHED_IMAGE:
      return action.payload.imageUrl
    
    default:
      return state
  }
}
