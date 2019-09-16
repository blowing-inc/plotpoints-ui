import React from 'react';

import Navbar from '../navbar/Navbar';

import Auth from '../../Auth';

const Header: React.FC = () => {
  return(
      <Navbar isLoggedIn={Auth.isAuthenticated()} />
  );
}

export default Header;