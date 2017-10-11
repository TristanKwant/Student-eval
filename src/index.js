import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import StudentsContainer from './students/StudentsContainer.js'
import BatchContainer from './batches/BatchContainer.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import StudentPage from './students/StudentPage.js'
import BatchPage from './batches/BatchPage.js'
import signUp from './users/signUp'
import signIn from './users/signIn'
import NewBatchPage from './batches/NewBatchPage.js'
import NewStudentPage from './students/NewStudentPage'



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={BatchContainer} />
      <Route path="/students/:studentId" component={StudentPage} />
      <Route path="/sign-up" component={signUp} />
      <Route path="/sign-in" component={signIn} />
      <Route path="/students" component={StudentsContainer} />
      <Route path="/batch/:batchId" component={ BatchPage } />
      <Route path="/new-batch" component={ NewBatchPage } />
      <Route path="/new-student" component={ NewStudentPage } />
    </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
injectTapEventPlugin();
