import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch'
import StudentEvaluator from './StudentEvaluator'
import subscribeToStudentService from '../actions/students/subscribe'
import NewStudentPage from './NewStudentPage'
import deleteStudent from '../actions/students/deleteStudent'
import './StudentPage.css'
import FlatButton from 'material-ui/FlatButton'

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

  renderColor(){
    const { student } = this.props

    if(student.currentColor === "red"){
      return {backgroundColor: 'red'}
    }

    if(student.currentColor === "green"){
      return {backgroundColor: 'green'}
    }

    if(student.currentColor === "yellow"){
      return {backgroundColor: 'yellow'}
    }



  }


  render() {
    const {  student } = this.props

    return(
      <div className="student-page">

        <div className="img-container">
          <img src={student.photo}  alt="this"/>
        </div>
        <div className="colorstudent-detail" style={this.renderColor()}>

        </div>
        <h1> {student.name}</h1>
        <h1> batch: {student.batch}</h1>

        <StudentEvaluator content={ student }/>
        <hr/>
        < NewStudentPage {...student }/>
        <hr/>
        <div className="actions">
          <FlatButton label="delete student" onClick={this.deleteThisStudent.bind(this)}/>
        </div>
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
