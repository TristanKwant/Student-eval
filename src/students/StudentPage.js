import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch'


class StudentPage extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,

  }

  componentWillMount() {
      this.props.fetchStudents()
    }

  renderColors(day, index){
    console.log("day",day[0].color)
    return (
      <h1>{day[0].color}</h1>

    )
  }

  render() {
    const { name, batch, days } = this.props

    return(
      <div className="recipe page">
        <h1> {name}</h1>
        <h1> {batch}</h1>
        <div>{ this.props.days.map(this.renderColors.bind(this)) } </div>
        {console.log(days)}
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
    student,
    ...student
  }

}

export default connect(mapStateToProps, { fetchStudents })(StudentPage)
