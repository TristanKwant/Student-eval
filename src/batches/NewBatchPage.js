import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import createBatch from '../actions/batch/createBatch'
import { history } from '../store'

class BatchPage extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,

  }
  constructor(props) {
    super()

    this.state = {
      number: 0,
      startDate: '',
      endDate: ''

    }
  }


    updateNumber(event) {
      this.setState({
        number: event.target.value
      })
    }

    updateStartDate(event){
      this.setState({
        startDate: event.target.value
      })

    }
    updateEndDate(event){
      this.setState({
        endDate: event.target.value
      })

    }

    saveBatch() {


    const {
      number,
      startDate,
      endDate
    } = this.state

    const batch = {
      number,
      startDate,
      endDate
    }

    this.props.save(batch)
    history.push('/')

 }

  render() {

    return(
      <div className="recipe page">
        <h1>Make a new batch</h1>
        <div className="form">
          <input
          type="number"
          ref="photo"
          className="photo"
          placeholder="Batch number"
          onChange={this.updateNumber.bind(this)}/>

          <label>
          Start date
            <input
            type="date"
            ref="photo"
            className="photo"
            onChange={this.updateStartDate.bind(this)}
            />
          </label>
          <label>
          end date
            <input
            type="date"
            ref="photo"
            className="photo"
            onChange={this.updateEndDate.bind(this)}
            />
          </label>

          <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>Save</button>
        </div>

        </div>
      </div>
    )
  }
}


const mapDispatchToProps = { save: createBatch }
export default connect(null, mapDispatchToProps)(BatchPage)
