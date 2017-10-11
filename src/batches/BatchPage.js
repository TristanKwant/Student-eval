import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatch from '../actions/batch/fetch.js'
import Student from '../students/Student.js'
import fetchStudents from '../actions/students/fetch'

class BatchPage extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,

  }

  componentWillMount() {
      this.props.fetchBatch()
      this.props.fetchStudents()
    }

  // renderColors(day, index){
  //   console.log("day",day.color)
  //   return (
  //     <h1>{day.color}</h1>
  //
  //   )
  // }
  renderStudents(student, index) {
    const { thebatch } = this.props
    
    if (student.batch == thebatch.number) {
      return <Student key={index} { ...student }/>
    }

  }


  render() {
    const { thebatch } = this.props
    // console.log(thebatch.students)
    return(
      <div className="recipe page">
        <h1> {this.props.number}</h1>
        { this.props.students.map(this.renderStudents.bind(this)) }
      </div>
    )
  }
}

const mapStateToProps = ({ batch, students }, { params }) => {

  const thebatch = batch.reduce((prev, next) => {
    if (next._id === params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    students,
    thebatch
  }

}

export default connect(mapStateToProps, {fetchBatch, fetchStudents})(BatchPage)
// <div>{ this.props.days.map(this.renderColors.bind(this)) } </div>
