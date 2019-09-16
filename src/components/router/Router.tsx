import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import Home from './routes/Home';
import Login from './routes/Login';
import Groups from './routes/Groups';
import Logout from './routes/Logout';
import Signup from './routes/Signup';
import Reset from './routes/Reset';
import Listen from './routes/Listen';
import Settings from './routes/Settings';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />

        {/* Users */}
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/reset-password" exact component={Reset} />
        <Route path="/settings" exact component={Settings} />

        {/* App */}
        <PrivateRoute path="/groups" exact component={Groups} />
        <PrivateRoute path="/listen" exact component={Listen} />

      </div>
    </BrowserRouter>
  );
}

export default Router;