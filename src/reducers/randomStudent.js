
import { RANDOM_STUDENT } from '../actions/students/randomStudent'

export default (state = null, { type, payload } = {}) => {
  switch (type) {

        case RANDOM_STUDENT:
        return payload
    default:
      return state

  }
}
