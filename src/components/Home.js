import React from 'react';
import { Jumbotron } from 'reactstrap';

//Css
import './App.css';


export default () => (
  <div className="d-none d-sm-block">
    <Jumbotron className="jumbotron-fluid bg-dblue text-white">
      <div className="container">
          <h1> Tu compañera</h1>
          <p>
            Con más de 30 años al aire informando y entreteniendo a la comunidad de Ayacucho y la zona.
            Siendo la primera FM de la ciudad, contamos con
            una amplia grilla de programación para todo público.
          </p>
      </div>
    </Jumbotron>
    <div className="row no-gutters">
      <div className="col-md-6">
        <img className="img-fluid" src="assets/images/equipo2.jpg" alt="imgequipo" />
      </div>
      <div className="bg-dblue col-md-6">
        <div className="text-align-center ml-2 mt-4">
          <h2 className="text-align-end text-white">En tu trabajo, tu comercio, tu casa o mientras descansas, nuestra emisora te acompaña y te informa.</h2>
          <h4 className="text-white d-sm-none d-lg-flex">Con más de 30 años al aire informando y entreteniendo a la comunidad de Ayacucho y la zona.
            Siendo la primera FM de la ciudad, contamos con
            una amplia grilla de programación para todo público.
          </h4>
          <h4 className="text-white d-sm-none d-xg-flex">Moviles en vivo durante todas las mañanas iteractuando directamene con lo vecinos de la ciudad.
          </h4>
        </div>
      </div>
    </div>
  </div>
)
