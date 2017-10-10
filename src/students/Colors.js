import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class Colors extends PureComponent {
  static propTypes = { // eslint-disable-line no-undef
    content: PropTypes.string.isRequired,
  }

  render() {
    const { days } = this.props
    {console.log("yeeeeej",days)}
    return(

    )
  }
}

const mapStateToProps = ({ students }) => {
  const CurrentStudent 
}
// const mapDispatchToProps = { fetchStudents}

export default connect(mapStateToProps, { fetchStudents })(Colors)
