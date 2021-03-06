import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import Logout from "./Logout";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/">DevDesk</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink href="./Login">Students</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./Login">Devdesk Helper</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./Registration">Registratrion</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/DevDesk-Queue-2" target="_blank">Github</NavLink>
            </NavItem>
          </Nav>
          < Logout />
        </Collapse>
      </Navbar>

  );
};

export default NavBar;
