import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Routes/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Login from './Routes/Login';
import Groups from './Routes/Groups';
import Logout from './Routes/Logout';
import Signup from './Routes/Signup';
import Reset from './Routes/Reset';


import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <div>
      <div>
        <Header />
        {/* <Sidebar /> */}
      </div>

      <Route path="/" exact component={App} />

      {/* Users */}
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/reset-password" exact component={Reset} />

      {/* App */}
      <Route path="/groups" exact component={Groups} />

    </div>
  </Router>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
