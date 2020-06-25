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
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Header.css';

export default (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" >
      <div className="container">
        <NavbarBrand href="/">
          <img src="https://www.now.vn/app/assets/img/nowvn.png?aa6bbddbf923c9dfd35ca83a7d068e6d" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="flex-grow-1" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Trang chủ</Link>
            </NavItem>
            <NavItem>
              <Link to="/food" className="nav-link">Đồ ăn</Link>
            </NavItem>
            <NavItem>
              <Link to="/drink" className="nav-link">Đồ uống</Link>
            </NavItem>
            <NavItem>
              <Link to="/streetfood" className="nav-link">Ăn vặt</Link>
            </NavItem>
            <NavItem className="d-flex alight-items-center p-2 ml-auto">
              <img className="header-icon-search" src="https://cdn.glitch.com/c31c0916-94ae-4f0f-8115-6a77f2008a66%2Fsearch.svg?v=1593048014630"/>
            </NavItem>
            <NavItem>
              <Button outline color="primary">Đăng nhập</Button>{' '}
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}