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
      <h1 className="Title">{ this.props.days[0].color }</h1>
    )
  }
}

export default Colors
