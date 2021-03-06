import API from '../../api'
// import loading from '../loading'
// import loadError from '../load-error'
// import loadSuccess from '../load-success'
import { history } from '../../store'

const api = new API()

export default (batch) => {
  return (dispatch) => {

    // dispatch(loading(true))

    api.app.authenticate()
      .then(() => {
        const backend = api.service('batch')
        backend.create(batch)
          .then((result) => {
            // dispatch(loading(false))
            // dispatch(loadSuccess())
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
