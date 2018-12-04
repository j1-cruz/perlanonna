import React from 'react';
import Reproductor from './Reproductor';

//Css
import './App.css';


export default () => (
      <div className="row bg-dblue no-gutters d-none d-sm-flex">
             <div className="col-3">
                <img src="assets/images/logofm.png"  alt="logofm88"  width={220} height={220}/>
            </div>
            <div className="col-3">
                <Reproductor />
            </div>
            <div className="col-6 text-white">
              <h3 className="mr-1 mt-4 josefin"> Tu compañia, estes donde estes</h3>
              <h5 className="mr-1 font-weight-light">
                Con más de 30 años al aire informando y entreteniendo a la comunidad de Ayacucho y la zona.
                Siendo la primera FM de la ciudad, contamos con
                una amplia grilla de programación para todo público.
              </h5>
            </div>
        </div>   
)
