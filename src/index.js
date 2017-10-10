import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import StudentsContainer from './students/StudentsContainer.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import StudentPage from './students/StudentPage.js'
import signUp from './users/signUp'
import signIn from './users/signIn'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={StudentsContainer} />
      <Route path="/students/:studentId" component={StudentPage} />
      <Route path="/sign-up" component={signUp} />
      <Route path="/sign-in" component={signIn} />
    </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
injectTapEventPlugin();
