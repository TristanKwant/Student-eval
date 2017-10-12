import API from '../../api'
// import loading from '../loading'
// import loadError from '../load-error'
// import loadSuccess from '../load-success'
import { history, replace } from '../../store'

const api = new API()


export default (studentId, batchId) => {
  return (dispatch) => {

    // dispatch(loading(true))
    console.log("delete")
    api.app.authenticate()
      .then(() => {
        const backend = api.service('students')
        backend.remove(studentId)
        .then(() => {
          history.replace(`/batch/${batchId}`)
        })
          .catch((error) => {
            // dispatch(loading(false))
            // dispatch(loadError(error))
          })
      })
      .catch((error) => {
        // dispatch(loadError({ message: 'You need to sign in first!' }))
        history.push('/sign-in')
      })

  }
}
