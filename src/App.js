import React, { Component } from 'react';
import PropTypes from 'prop-types'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import StudentsContainer from './students/StudentsContainer.js'
import Navbar from './components/Navbar'
import './App.css'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Navbar />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
