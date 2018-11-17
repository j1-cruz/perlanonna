//Dependencis
import React from 'react';
import { NavLink } from 'react-router-dom';

//Componentes
import Reproductor2 from './Reproductor2';

//Css
import './App.css';

export default () => (
    <nav className="navbar d-block d-sm-none hero-image bg-dark">
      <div className="text-center mt-4 font-weight-bold">
          <NavLink exact to="/" className="mr-2 text-white">Inicio</NavLink>
          <NavLink to="/programas" className="text-white" data-toggle="tooltip" data-placement="top" title="desliza">Programacion</NavLink>
      </div>
      <Reproductor2 />
      <div className="text-center mt-5 pt-3">
        <span><img className="ml-1" alt="instagram" src="assets/images/social-icon/what4.png" width={45} height={45} data-toggle="tooltip" data-placement="top" title="2494-381079" /></span>
        <a href="https://www.facebook.com/fm88ayacucho/" className="ml-3"><img alt="facebook" src="assets/images/social-icon/face4.png" width={42} height={42} /></a>
        <a href="https://www.instagram.com/fm88_89.3/?hl=es-la" className="ml-3"><img alt="instagram" src="assets/images/social-icon/insta4.png" width={42} height={42}/></a>
      </div>
    </nav>
);
