import * as request from 'superagent'
import {baseUrl} from '../constants'
export const FETCHED_WORD = "FETCHED_WORD"

export const fetchWord = (wordId) => (dispatch) => {
    request
        .get(`${baseUrl}/images/${wordId}`)
        .then(response => dispatch({
        type: FETCHED_WORD,
        payload: response.body
        }))
        .catch(err => console.log(err))
    }