import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch.js'
import { Link } from 'react-router'
import Student from './Student.js'

class StudentsContainer extends Component {
  static propTypes = {
    students: PropTypes.array.isRequired,
    fetchStudents: PropTypes.func.isRequired,
  }

  componentWillMount() {
      this.props.fetchStudents()
    }

    renderStudents(student, index) {
      return <Student
        key={index} { ...student } />
    }

  render() {

    return (
      <div>
        { this.props.students.map(this.renderStudents.bind(this)) }
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })
// const mapDispatchToProps = { fetchStudents}

export default connect(mapStateToProps, { fetchStudents })(StudentsContainer)
