import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch'
import StudentEvaluator from './StudentEvaluator'

class StudentPage extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,

  }

  componentWillMount() {
      this.props.fetchStudents()
    }

  renderColors(day, index){
    console.log("day",day.color)
    return (
      <h1>{day.color}</h1>

    )
  }



  render() {
    const { name, batch, photo } = this.props

    return(
      <div className="recipe page">
        <img src={photo} width="200" alt="this"/>
        <h1> {name}</h1>
        <h1> {batch}</h1>
        <StudentEvaluator />
        {console.log(photo)}
      </div>
    )
  }
}

const mapStateToProps = ({ students }, { params }) => {
  const student = students.reduce((prev, next) => {
    if (next._id === params.studentId) {
      return next
    }
    return prev
  }, {})

  return {
    students,
    ...student
  }

}

export default connect(mapStateToProps, { fetchStudents })(StudentPage)
// <div>{ this.props.days.map(this.renderColors.bind(this)) } </div>
