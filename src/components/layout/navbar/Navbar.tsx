import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPlayCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../../svg/logo.svg';

interface IProps {
  isLoggedIn: boolean
}

const Header = (props: IProps) => {

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    isOpen ? setIsOpen(false): setIsOpen(true);
  }
  
  return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={Logo} style={{height: '35px', width: '35px'}} className="app-logo" alt="logo" />
            PlotPoints
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse  navbar isOpen={isOpen} >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/listen">
                  <FontAwesomeIcon icon={faPlayCircle} /> Listen
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/groups">Groups</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <FontAwesomeIcon icon={faCog} /> Settings
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/listen">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    { props.isLoggedIn ? "Logout" : "Login" }
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
}

export default Header;