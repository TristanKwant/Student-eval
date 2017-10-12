import API from '../../api'

export const FETCHED_BATCHES = 'FETCHED_BATCHES'

const api = new API()

export default () => {
  return (dispatch) => {
    api.app.authenticate()
      .then(() => {
    const backend = api.service('batch')
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
        type: FETCHED_BATCHES,
        payload: result.data
      })
    })
    .catch((error) => {
      // error handling!
    })
    })
  }
}
