
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Student from './Student'



export class RandomStudent extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,

  }


  render() {
    const { randomStudent } = this.props
    if (randomStudent === null) {
      return null
    }
    return(
      <div>
        <h1>Ask a question</h1>
        <Student { ...randomStudent } />
      </div>
    )
  }
}

const mapStateToProps = ({ randomStudent }) => ({ randomStudent })

export default connect(mapStateToProps, { Student })(RandomStudent)
