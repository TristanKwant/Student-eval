import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/sign-out'

const CURRENT_USER_KEY = 'currentUserStudentEval'

const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || 'null')

export default (state = currentUser, { type, payload } = {}) => {
  switch (type) {
    case USER_SIGNED_IN :
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(payload))
      return { ...payload }

    case USER_SIGNED_OUT :
      localStorage.removeItem(CURRENT_USER_KEY)
      return null

    default :
      return state
  }
}
