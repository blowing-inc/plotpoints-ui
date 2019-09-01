import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Routes/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Header from './components/Header';
import Login from './Routes/Login';
import Groups from './Routes/Groups';
import Logout from './Routes/Logout';


import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <Header />
      </nav>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/groups" exact component={Groups} />
    </div>
  </Router>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
