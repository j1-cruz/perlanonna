import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Tooltip,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem }  from 'reactstrap';

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
          <Card inverse>
            <CardImg width="100%"  src="assets/images/perlanonna.png" alt="Card image cap" />
            <CardImgOverlay>
                <Navbar dark expand="md">
          <NavbarToggler onClick={this.toggle} />
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
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavItem>
                            <NavLink to="/cuencos" className="nav-link text-danger">
                              Cuencos
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
          </Card>
    );
  }
}
    
    
  