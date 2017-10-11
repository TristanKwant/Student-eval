
export const RANDOM_STUDENT = 'RANDOM_STUDENT'

export default (student) => {
  return {
    type: RANDOM_STUDENT,
    payload: student
  }
}
