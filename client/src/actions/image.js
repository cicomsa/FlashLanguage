import * as request from 'superagent'
import {baseUrl} from '../constants'

export const FETCHED_IMAGE = "FETCHED_IMAGE"


export const fetchImage = (imageId) => (dispatch) => {
request
    .get(`${baseUrl}/images/${imageId}`)
    .then(response => dispatch({
    type: FETCHED_IMAGE,
    payload: response.body
    }))
    .catch(err => alert(err))
}

