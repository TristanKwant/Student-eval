
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './Batch.css'



export class Batch extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,

  }


  render() {
    const { _id, number, startDate, endDate } = this.props

    return(
      <article className="batches">
        <header>


          <h1>
            <Link to={`/batch/${_id}`}>Batch: { number }</Link>
          </h1>
          <h2>start date: {startDate}</h2>
          <h2>end date: {endDate}</h2>


        </header>


      </article>
    )
  }
}

const mapStateToProps = ({ batch }) => ({ batch })

export default connect(mapStateToProps,)(Batch)
