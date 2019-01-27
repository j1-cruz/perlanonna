import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Tooltip,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem }  from 'reactstrap';

import Carrousel from './Carrousel';
import './App.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.state = {
      isOpen: false,
      tooltipOpen3: false
    };
  }
    
  toggle3(){
        this.setState({
          tooltipOpen3: !this.state.tooltipOpen3
        });
    }
 
    
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    
  render() {
      
    return (
        <div>
          <Card inverse className="d-none d-sm-flex">
            <CardImg width="100%"  src="assets/images/perlanonna.png" alt="Card image cap" />
            <CardImgOverlay>
                <Navbar dark expand="md">
          <NavbarToggler onClick={this.toggle} className="bg-warning" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="mr-auto">
            <NavItem>
                <NavLink to="/" className="nav-link text-danger">
                  <span className="fa fa-home fa-lg mr-1"></span>
                  Inicio
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="text-danger">
                    <span className="fa fa-list fa-lg mr-1"></span>
                      Productos
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavItem>
                            <NavLink to="/mates" className="nav-link text-danger">
                              Mates
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                            <NavLink to="/tazas" className="nav-link text-danger">
                              Tazas
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                            <NavLink to="/cuencos" className="nav-link text-danger">
                              Cuencos
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                            <NavLink to="/platos" className="nav-link text-danger">
                              Platos
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                        <DropdownItem>
                        <NavItem>
                            <NavLink to="/chops" className="nav-link text-danger">
                              Chops
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                        <DropdownItem>
                        <NavItem>
                            <NavLink to="/cocina" className="nav-link text-danger">
                              Cocina
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                        <DropdownItem>
                        <NavItem>
                            <NavLink to="/macetaz" className="nav-link text-danger">
                              Macetaz
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                        <DropdownItem>
                        <NavItem>
                            <NavLink to="/sets" className="nav-link text-danger">
                              Sets
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                    </DropdownMenu>
              </UncontrolledDropdown>    
            </Nav>
            <Nav navbar className="ml-auto mt-1">
              <NavItem>
                <a className="mr-1" href="https://www.facebook.com/fm88ayacucho/">
                    <img src="assets/images/social-icon/face4.png"
                    alt="logofm88" width={35} height={35}/>
                </a>
        
                    <img id="whatsapp" className="mr-1" src="assets/images/social-icon/what7.png" alt="logofm88" width={35} height={35}/>
                    <Tooltip placement="top" isOpen={this.state.tooltipOpen3} target="whatsapp" toggle={this.toggle3}>2494-381078</Tooltip>
                
                <a className="mr-1" href="https://www.instagram.com/fm88_89.3/?hl=es-la">
                    <img src="assets/images/social-icon/insta7.png" 
                    alt="logofm88" width={35} height={35}/>
                </a>
             </NavItem>
            </Nav>  
          </Collapse>
        </Navbar>
            </CardImgOverlay>
            <Card>
            <h1 className="text-center dancing bg-dpink">"En un mundo de plástico y ruido, quiero ser barro y silencio"</h1>
            
            </Card>
            <Carrousel />
          </Card>


            <Card inverse className="d-sm-none">
            <CardImg width="100%"  src="assets/images/perlanonna.png" alt="Card image cap" />
            <Card>
              <h6 className="text-center dancing bg-dpink">"En un mundo de plástico y ruido, quiero ser barro y silencio"</h6>
            </Card>
            <Navbar expand="md">
            <Nav  className="mr-auto">
            <NavItem>
                <NavLink to="/" className="nav-link text-danger">
                  <span className="fa fa-home fa-lg mr-1"></span>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="text-danger">
                    <span className="fa fa-list fa-lg mr-1"></span>
                      Productos
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavItem>
                            <NavLink to="/mates" className="nav-link text-danger">
                              Mates
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                            <NavLink to="/tazas" className="nav-link text-danger">
                              Tazas
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                            <NavLink to="/cuencos" className="nav-link text-danger">
                              Cuencos
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                            <NavLink to="/cuencos" className="nav-link text-danger">
                              Tazas
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                        <DropdownItem>
                        <NavItem>
                            <NavLink to="/cuencos" className="nav-link text-danger">
                              Chops
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                        <DropdownItem>
                        <NavItem>
                            <NavLink to="/cuencos" className="nav-link text-danger">
                              Cocina
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                        <DropdownItem>
                        <NavItem>
                            <NavLink to="/cuencos" className="nav-link text-danger">
                              Macetaz
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                        <DropdownItem>
                        <NavItem>
                            <NavLink to="/cuencos" className="nav-link text-danger">
                              Cets
                            </NavLink>
                        </NavItem>
                      </DropdownItem>
                    </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav navbar className="ml-auto mt-1">
              <NavItem>
                <a className="mr-1" href="https://www.facebook.com/fm88ayacucho/">
                    <img src="assets/images/social-icon/face4.png"
                    alt="logofm88" width={25} height={25}/>
                </a>
        
                    <img id="whatsapp" className="mr-1" src="assets/images/social-icon/what7.png" alt="logofm88" width={25} height={25}/>
                    <Tooltip placement="top" isOpen={this.state.tooltipOpen3} target="whatsapp" toggle={this.toggle3}>2494-381078</Tooltip>
                
                <a className="mr-1" href="https://www.instagram.com/fm88_89.3/?hl=es-la">
                    <img src="assets/images/social-icon/insta7.png" 
                    alt="logofm88" width={25} height={25}/>
                </a>
             </NavItem>
            </Nav>  
        </Navbar>

      
          </Card>
            <div className="d-md-none">
              <Carrousel />
            </div>
        </div>
    );
  }
}
    
    
  