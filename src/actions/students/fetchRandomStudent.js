import API from '../../api'

export const FETCHED_BATCH_STUDENTS = 'FETCHED_BATCH_STUDENTS'

const api = new API()

export default (batchNr) => {
  console.log(batchNr)
  return (dispatch) => {
    api.app.authenticate()
      .then(() => {
    const backend = api.service('students')
    backend.find({
      query: {
        batch: 10
      }
    })
    .then((result) => {
      console.log("test",result)
      dispatch({
        type: FETCHED_BATCH_STUDENTS,
        payload: result.data
      })
    })
    .catch((error) => {
      // error handling!
    })
    })
  }
}
