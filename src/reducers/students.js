import { FETCHED_STUDENTS } from '../actions/students/fetch'
import {

  STUDENT_UPDATED,
  STUDENT_REMOVED
} from '../actions/students/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return [].concat(payload)

      case STUDENT_UPDATED :
        return state.map((student) => {
          if (student._id === payload._id) return { ...student, ...payload }
          return student
        })
    default:
      return state

  }
}
