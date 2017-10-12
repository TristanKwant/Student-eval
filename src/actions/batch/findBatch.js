import API from '../../api'

export const FIND_BATCH = 'FIND_BATCH'

const api = new API()

export default (batchNr) => {
  console.log("find batch",batchNr)
  return (dispatch) => {
    api.app.authenticate()
      .then(() => {
    const backend = api.service('batch')
    backend.find({
      query: {
        number: batchNr
      }
    })
    .then((result) => {
      console.log(result)
      dispatch({
        type: FIND_BATCH,
        payload: result.data
      })
    })
    .catch((error) => {
      // error handling!
    })
    })
  }
}
