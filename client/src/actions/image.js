import * as request from 'superagent'
import {baseUrl} from '../constants'

export const FETCHED_IMAGE = "FETCHED_IMAGE"
export const SUBMIT = 'SUBMIT'



export const fetchImage = (imageId) => (dispatch) => {
   // console.log(imageId)
request
    .get(`${baseUrl}/images/${imageId}`)
    .then(response => dispatch({
    type: FETCHED_IMAGE,
    payload: response.body
    }))
    .catch(err => console.log(err))
}



export const submit = input => ({
    type: SUBMIT
})