import { FETCHED_STUDENTS } from '../actions/students/fetch'
import { FETCHED_BATCH_STUDENTS } from '../actions/students/fetchRandomStudent'
import { RANDOM_STUDENT } from '../actions/students/randomStudent'
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

        case FETCHED_BATCH_STUDENTS :
          return [].concat(payload)

        case RANDOM_STUDENT:
        return [].concat(payload)
    default:
      return state

  }
}
