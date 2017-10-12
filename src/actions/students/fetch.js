import API from '../../api'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'

const api = new API()

export default () => {
  return (dispatch) => {
    api.app.authenticate()
      .then(() => {
    const backend = api.service('students')
    backend.find({
      query: {
        $limit: 50,
        $sort: {
          createdAt: -1
        }
      }
    })
    .then((result) => {
      console.log(result)
      dispatch({
        type: FETCHED_STUDENTS,
        payload: result.data
      })
    })
    .catch((error) => {
      // error handling!
    })
    })
  }
}
