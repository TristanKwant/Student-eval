import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatch from '../actions/batch/fetch.js'
import resetBatch from '../actions/batch/resetBatch.js'
import Student from '../students/Student.js'
import fetchStudents from '../actions/students/fetch'
import fetchRandomStudent from '../actions/students/fetchRandomStudent'
import randomStudentAction from '../actions/students/randomStudent'
import { Link } from 'react-router'
import RandomStudent from '../students/RandomStudent.js'
import './BatchPage.css'
import RaisedButton from 'material-ui/RaisedButton'

class BatchPage extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,

  }

  componentWillMount() {
      this.props.fetchBatch()
      this.props.fetchStudents()
      this.props.resetBatch()
    }


  renderStudents(student, index) {
    const { thebatch } = this.props

    if (student.batch == thebatch.number) {
      return <Student key={index} batch={ thebatch } { ...student }/>
    }

  }
  randomStudent(batchNr){
     const { students } = this.props
    console.log(batchNr)
    // this.props.fetchRandomStudent(batchNr)
    const batchStudents = this.props.students.filter(function( student ) {
      return student.batch == batchNr;
    });

    // console.log(batchStudents)
    this.pickStudent(batchStudents)
  }

  checkIfEmpty(batchStudents, color){
  //  console.log("studentje", student.currentColor)
  var rednr = 0
  batchStudents.map((student) =>{

    if (student.currentColor === "red") {
      return rednr ++
    }

  })

  var greennr = 0
  batchStudents.map((student) =>{

    if (student.currentColor === "green") {
      return greennr ++
    }

  })

  var yellownr = 0
  batchStudents.map((student) =>{

    if (student.currentColor === "yellow") {
      return yellownr ++
    }

  })

  if (color === "red" && rednr === 0 ) {
    this.pickStudent(batchStudents)
  }
  if (color === "yellow" && yellownr === 0) {
    this.pickStudent(batchStudents)
  }
  if (color === "green" && greennr === 0) {
    this.pickStudent(batchStudents)
  }





console.log("green", greennr)
console.log("red", rednr)
 console.log("yellow", yellownr)
  // if (students.length === 0) {
  //   return this.pickStudent(students)
  // } else {
  //   return students
  // }
  return batchStudents
}


  pickStudent(batchStudents){
  var random = Math.random();

  if (random <= 0.17) {
    console.log("color was green")
    var student = this.filterStudent(this.checkIfEmpty(batchStudents, "green"), "green")


  } else if (random <= 0.50) {
     console.log("color was yellow")
    var student = this.filterStudent(this.checkIfEmpty(batchStudents, "yellow"),"yellow")

  }else  {
    console.log("color was red")
    var student = this.filterStudent(this.checkIfEmpty(batchStudents, "red"), "red")



  }
}

filterStudent(batchStudents, color){
  // console.log(batchStudents, color)

  const students = batchStudents.filter(function( student ) {

    return student.currentColor === color;
  });

  const pickedstudent = students[Math.floor(Math.random() * students.length)]
  // console.log(pickedstudent)
  this.renderRandom(pickedstudent)
}


renderRandom(pickedstudent){
  // const {students } = this.state

  if (pickedstudent != undefined) {
    this.props.randomStudentAction(pickedstudent)
  }
  console.log("sorry he")
    // return <Student  { ...student }/>



}




  render() {
    const { thebatch, randomStudent } = this.props
    // console.log(thebatch.students)
    return(
      <div className="batch-page">
        <h1> Batch : {thebatch.number}</h1>
        <div className="randomStudent">
          <RaisedButton label="Ask a question" onClick={() => this.randomStudent(thebatch.number)}/>
          <RandomStudent />
        </div>


        <div className="students-container">
          <h1>students</h1>
          <div className="studentsgrid">
          { this.props.students.map(this.renderStudents.bind(this)) }
          </div>
        </div>

        <div>
        <RaisedButton label={<Link to={`/new-student`} >add Student</Link>}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ batch, students, randomStudent }, { params }) => {

  const thebatch = batch.reduce((prev, next) => {
    if (next._id === params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    students,
    thebatch,
    randomStudent
  }

}
const mapDispatchToProps = { fetchBatch, fetchStudents, fetchRandomStudent, randomStudentAction, resetBatch }
export default connect(mapStateToProps, mapDispatchToProps)(BatchPage)
// <div>{ this.props.days.map(this.renderColors.bind(this)) } </div>
