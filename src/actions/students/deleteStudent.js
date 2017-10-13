import API from '../../api'

import { history } from '../../store'

const api = new API()


export default (studentId, batchId) => {
  return (dispatch) => {

    console.log("delete")
    api.app.authenticate()
      .then(() => {
        const backend = api.service('students')
        backend.remove(studentId)
        .then(() => {
          history.replace(`/batch/${batchId}`)
        })
          .catch((error) => {
            console.log("ERRRRRORRR", error)
          })
      })
      .catch((error) => {
        console.log("ERRRRRORRR", error)
        history.push('/sign-in')
      })

  }
}
