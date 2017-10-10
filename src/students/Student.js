
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'




export class Student extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,

  }


  render() {
    const { _id, name } = this.props

    return(
      <article className="RecipeItem">
        <header>

          hell
          <h1>
            <Link to={`/students/${_id}`}>{ name }</Link>
          </h1>


        </header>


      </article>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, { Student })(Student)
