import { FETCHED_BATCHES } from '../actions/batch/fetch'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case  FETCHED_BATCHES:
      return [].concat(payload)





    default:
      return state

  }
}
