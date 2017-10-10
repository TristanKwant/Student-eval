import { FETCHED_STUDENTS } from '../actions/students/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return [].concat(payload)

    default:
      return state

  }
}
