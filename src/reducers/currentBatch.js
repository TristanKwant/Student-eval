
import { FIND_BATCH } from '../actions/batch/findBatch'
import { RESET_BATCH } from '../actions/batch/resetBatch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {


      case  FIND_BATCH:
        return payload

        case  RESET_BATCH:
          return payload



    default:
      return state

  }
}
