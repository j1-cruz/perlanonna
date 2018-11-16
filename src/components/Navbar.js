import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
   } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="bg-dblue" dark expand="md">
          <NavbarBrand to="/"><img src="assets/images/logofm.png" alt="logofm88" width={70} height={70}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="mr-auto">
            <NavItem>
                <NavLink to="/" className="nav-link">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/programas" className="nav-link">Programacion</NavLink>
              </NavItem>
            </Nav>
            <Nav navbar className="ml-auto">
              <NavItem clasName="ml-auto">
                <NavLink to="/programas"><img src="assets/images/social-icon/face6.png" alt="logofm88" width={45} height={45}/></NavLink>
                <NavLink to="/programas"><img src="assets/images/social-icon/what6.png" alt="logofm88" width={45} height={45}/></NavLink>
                <NavLink to="/programas"><img src="assets/images/social-icon/insta6.png" alt="logofm88" width={45} height={45}/></NavLink>
             </NavItem>
            </Nav>  
          </Collapse>
        </Navbar>
      </div>
    );
  }
}