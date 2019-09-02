import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3> Sidebar </h3>
      </div>
      <ul className="list-components">
        <p>Heading</p>
        <li className="active">
          <ul className="collapse list-unstyled" id="submenu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/groups">Groups</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">Test</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;