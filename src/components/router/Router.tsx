import React from 'react';
import { BrowserRouter as BRouter, Route } from 'react-router-dom';

import Home from './routes/Home';
import Login from './routes/Login';
import Groups from './routes/Groups';
import Logout from './routes/Logout';
import Signup from './routes/Signup';
import Reset from './routes/Reset';

const Router: React.FC = () => {
  return (
    <BRouter>
      <div>
        <Route path="/" exact component={Home} />

        {/* Users */}
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/reset-password" exact component={Reset} />

        {/* App */}
        <Route path="/groups" exact component={Groups} />

      </div>
    </BRouter>
  );
}

export default Router;