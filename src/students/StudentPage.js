import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch'
import StudentEvaluator from './StudentEvaluator'
import subscribeToStudentService from '../actions/students/subscribe'
import NewStudentPage from './NewStudentPage'
import deleteStudent from '../actions/students/deleteStudent'

class StudentPage extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,

  }

  componentWillMount() {

      this.props.fetchStudents()
      this.props.subscribeToStudentService()

    }



  renderColors(day, index){
    console.log("day",day.color)
    return (
      <h1>{day.color}</h1>

    )
  }

  deleteThisStudent(){
    const {  student, currentBatch } = this.props

    this.props.deleteStudent(student._id, currentBatch[0]._id)
  }


  render() {
    const {  student } = this.props

    return(
      <div className="recipe page">
        <img src={student.photo} width="200" alt="this"/>
        <h1> {student.name}</h1>
        <h1> {student.batch}</h1>
        <h1>{console.log("hellooo",student.days)}</h1>
        <h1>{student.currentColor}</h1>
        <StudentEvaluator content={ student }/>
        < NewStudentPage {...student }/>
        <div className="actions">
          <button className="primary" onClick={this.deleteThisStudent.bind(this)}>Destorrrrrry</button>
        </div>
        {console.log(student.photo)}
      </div>
    )
  }
}

const mapStateToProps = ({ students, currentBatch }, { params }) => {
  const student = students.reduce((prev, next) => {
    if (next._id === params.studentId) {
      return next
    }
    return prev
  }, {})

  return {
    students,
    student,
    currentBatch,

  }

}


export default connect(mapStateToProps, { fetchStudents, subscribeToStudentService, deleteStudent })(StudentPage)
// <div>{ this.props.days.map(this.renderColors.bind(this)) } </div>
