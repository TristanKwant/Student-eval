import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Colors extends PureComponent {
  static propTypes = { // eslint-disable-line no-undef
    content: PropTypes.string.isRequired,
  }

  render() {
    const { student } = this.props
    console.log("yeeeeej",student)
    return(
      <div></div>
    )
  }
}

const mapStateToProps = ({ students }, { params }) => {

}
// const mapDispatchToProps = { fetchStudents}

export default connect(mapStateToProps)(Colors)
