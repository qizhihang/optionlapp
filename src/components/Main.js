
import store from '../stores/store';
import React from 'react';
import { Provider } from 'react-redux'
import Home from './LoadableDashboard'
import { Router,Route ,Link} from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store)
class AppComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route  path="/"  exect >
          <div>
        <h1>这是一个根路由</h1>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/'>About</Link></li>
        </ul>
      </div>

          </Route>
          <Route  path="/home"   > <Home></Home></Route>
        </Router>
      </Provider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
