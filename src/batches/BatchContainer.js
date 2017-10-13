import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetchBatch from '../actions/batch/fetch.js'
import Batch from './Batch.js'
import { Link } from 'react-router'

class BatchContainer extends Component {


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
        <div >
          <button className="primary" ><Link to={`/new-batch`}>make new batch</Link></button>
        </div>
      </div>

    )
  }
}

const mapStateToProps = ({ batch }) => ({ batch })
// const mapDispatchToProps = { fetchStudents}

export default connect(mapStateToProps, { fetchBatch })(BatchContainer)
