
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
    const { _id, number } = this.props

    return(
      <article className="batches">
        <header>


          <h1>
            <Link to={`/batch/${_id}`}>Batch: { number }</Link>
          </h1>


        </header>


      </article>
    )
  }
}

const mapStateToProps = ({ batch }) => ({ batch })

export default connect(mapStateToProps,)(Batch)
