//Dependencis
import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
   } from 'reactstrap';
//Css
import './App.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle.bind(this);
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
        <Navbar className="bg-dceleste d-none d-sm-flex" dark expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="mr-auto">
            <NavItem>
                <NavLink to="/" className="nav-link">
                  <span className="fa fa-home fa-lg mr-1"></span>
                  Inicio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/programas" className="nav-link">
                <span className="fa fa-list fa-lg mr-1"></span>
                  Programacion
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar className="ml-auto mt-1">
              <NavItem>
                <a className="mr-1" href="https://www.facebook.com/fm88ayacucho/">
                    <img src="assets/images/social-icon/face4.png"
                    
                    alt="logofm88" width={40} height={40}/>
                </a>
        
                    <img id="what" className="mr-1" src="assets/images/social-icon/what4.png" alt="logofm88" width={40} height={40}/>
                
                <a href="https://www.instagram.com/fm88_89.3/?hl=es-la">
                    <img src="assets/images/social-icon/insta4.png" 
                    alt="logofm88" width={40} height={40}/>
                </a>
             </NavItem>
            </Nav>  
          </Collapse>
        </Navbar>
      </div>
    );
  }
}