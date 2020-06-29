import React, { useState } from 'react';
import {CartContext} from '../contexts/CartContext';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { Link } from "react-router-dom";
import './Header.css';

export default (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const login = JSON.parse(localStorage.getItem("login"));
  const [isLogin, setIsLogin] = useState(login.isSuccess);
  const toggle = () => setIsOpen(!isOpen);
  const onLogout = () => {
    localStorage.setItem("login", JSON.stringify({isSuccess: false}));
    setIsLogin(JSON.parse(localStorage.getItem("login")).isSuccess);
    window.location = "/";
  };
  

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
            <CartContext.Consumer>
              {
                ({cartItems}) => {
                  if(cartItems.length){
                    return <NavItem>
                    <Link to="/cart" className="nav-link">Giỏ hàng({cartItems.length})</Link>
                  </NavItem>
                  }
                  return;
                }
              }
            </CartContext.Consumer>
            <NavItem className="d-flex alight-items-center p-2 ml-auto">
              <img className="header-icon-search" src="https://cdn.glitch.com/c31c0916-94ae-4f0f-8115-6a77f2008a66%2Fsearch.svg?v=1593048014630" />
            </NavItem>
            {!isLogin && <NavItem>
              <Link to="/login"><Button outline color="primary">Đăng nhập</Button>{' '}</Link>
            </NavItem>}
            {isLogin && <NavItem>
              <Link to="/login"><Button outline color="primary" onClick={onLogout}>Đăng Xuất</Button>{' '}</Link>
            </NavItem>}
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}