
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'




export class Student extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,

  }


  render() {
    const { _id, name, photo, currentColor } = this.props

    return(
      <article className="RecipeItem">
        <header>

          <img src={photo} width="200" alt="this"/>
          <h1>
            <Link to={`/students/${_id}`}>{ name }</Link>
          </h1>
          <h2>{currentColor} </h2>


        </header>


      </article>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, { Student })(Student)
