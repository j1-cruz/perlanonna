import React from 'react';
import { BrowserRouter as HashRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
export default () => (
<div>
<div className="container">
    <h3 className="text-center mt-3 josefin">La mejor programación, para acompañarte durante todo el día</h3>
</div>
    
    <hr />
   
<HashRouter className="mt-2">
    
  <div className="row">
    <div className="col-sm-6">
      <ul className="list-group">
        <h5 className="list-group-item bg-danger text-white text-center">Lunes a Viernes</h5>
        <Link to="#de7a8" type="button" className="btn btn-outline-danger text-dark font-weight-bold mb-1">07:00 a 08:00 hs "de 7 a 8"
        </Link>
        <Link to="#radiomovil" type="button" className="btn btn-outline-danger      text-dark font-weight-bold mb-1">08:00 a 13:00 hs   Radio Móvil
        </Link>
        <Link to="#tophits" type="button" className="btn btn-outline-danger         text-dark font-weight-bold mb-1">13:00 a 15:00 hs   Top Hits
        </Link>
        <Link to="#elexpresso" type="button" className="btn btn-outline-danger         text-dark font-weight-bold mb-1">15:00 a 16:30 hs   El Expresso
        </Link>
        <Link to="#sincassette" type="button" className="btn btn-outline-danger     text-dark font-weight-bold mb-1">16:00 a 18:00 hs   Sin Cassette
        </Link>
        <Link to="#encompania" type="button" className="btn btn-outline-danger       text-dark font-weight-bold mb-1">18:30 a 20:00 hs   En compañia
        </Link>
        <Link to="#fm100" type="button" className="btn btn-outline-danger text-dark font-weight-bold mb-1">20:00 a 21:00 hs  FM 100
        </Link>
      </ul>
    </div>
    
    <div className="col-sm-6">
    <ul className="list-group">
        <h5 className="list-group-item bg-warning text-white text-center">Sabado</h5>
        <Link to="#manosalaobra" type="button" className="btn btn-outline-warning text-dark font-weight-bold mb-1">9:30hs a 10:30hs Manos a la    obra
        </Link>
        <Link to="#hablandoclaro" type="button" className="btn btn-outline-warning text-dark font-weight-bold mb-1">10:30hs a 13:00hs Hablando claro
        </Link>
        <Link to="#notorius" type="button" className="btn btn-outline-warning text-dark font-weight-bold mb-1">17:00hs a 20:00hs Notorius
        </Link>
      </ul>
      <ul className="list-group">
          <h5 className="list-group-item active bg-info text-center">Domingo</h5>
          <Link to="#unespacioparavos" type="button" className="btn btn-outline-info text-dark font-weight-bold mb-1">9:00hs a 10:00hs Un espacio para vos
          </Link>
          <Link to="#2x4" type="button" className="btn btn-outline-info text-dark font-weight-bold mb-1">10:00hs a 12:00hs 2x4
          </Link>
        </ul>
      </div>
    
    </div>
  </HashRouter>
    
</div>
)
