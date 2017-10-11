
import API from '../../api'
// import {
//   LOAD_ERROR,
// } from '../loading'

const api = new API()
export const ADD_EVAL = 'ADD_EVAL'

export default (studentId, answer) => {
  return (dispatch) => {
    const backend = api.service('students')
    api.app.authenticate()
      .then((result) => {
        backend.patch(studentId, { type: ADD_EVAL, payload: answer })
        .then(() => {
          dispatch({
            type: ADD_EVAL,
            payload: answer
          })
        })
        .catch((error) => {
          // dispatch({
          //   type: LOAD_ERROR,
          //   payload: error.message
          // })
        })
      })
      .catch((error) => {
        // dispatch({
        //   type: LOAD_ERROR,
        //   payload: error.message
        // })
      })
  }
}
