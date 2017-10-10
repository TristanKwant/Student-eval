import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatch from '../actions/batch/fetch.js'
import Batch from './Batch.js'

class BatchContainer extends Component {
  static propTypes = {
    students: PropTypes.array.isRequired,
    fetchStudents: PropTypes.func.isRequired,
  }

  componentWillMount() {
      this.props.fetchBatch()
    }

    renderStudents(batch, index) {
      return <Batch
        key={index} { ...batch } />
    }

  render() {

    return (
      <div>
        { this.props.batch.map(this.renderStudents.bind(this)) }
      </div>
    )
  }
}

const mapStateToProps = ({ batch }) => ({ batch })
// const mapDispatchToProps = { fetchStudents}

export default connect(mapStateToProps, { fetchBatch })(BatchContainer)
