//Dependencis
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'reactstrap';
//Componentes
import Reproductor2 from './Reproductor2';

//Css
import './App.css';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
      

    this.state = {
      tooltipOpen: false,
      tooltipOpen2: false
    };
  }
    toggle2(){
        this.setState({
          tooltipOpen2: !this.state.tooltipOpen2
        })
    }
    
    toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }
    

render(){
    return (
    <nav className="navbar d-block d-sm-none hero-image bg-dark">
      <div className="text-center mt-4 font-weight-bold">
          <NavLink exact to="/" className="mr-2 text-white">Inicio</NavLink>
          <NavLink id="programacion" to="/programas" className="text-white">Programacion</NavLink>
          <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="programacion" toggle={this.toggle}>Desliza</Tooltip>
      </div>
      <Reproductor2 />
      <div className="text-center mt-5 pt-3">
        <img id="what" src="assets/images/social-icon/what4.png" alt="logofm88" width={42} height={42}/>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen2} target="what" toggle={this.toggle2}>2494-381078</Tooltip>
        
        <a href="https://www.facebook.com/fm88ayacucho/" className="ml-3"><img alt="facebook" src="assets/images/social-icon/face4.png" width={42} height={42} /></a>
        
        <a href="https://www.instagram.com/fm88_89.3/?hl=es-la" className="ml-3"><img alt="instagram" src="assets/images/social-icon/insta4.png" width={42} height={42}/></a>
      </div>
    </nav>
    );
    }
}