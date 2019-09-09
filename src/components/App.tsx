import React from 'react';

import Header from './layout/header//Header';
import Router from './router/Router';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Router />
    </div>
 );
}

export default App;