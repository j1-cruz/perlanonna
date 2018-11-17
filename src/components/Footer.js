//Dependencis
import React from 'react';
import {NavLink} from 'react-router-dom'

//css
import './App.css';

const Footer = (props) => (
				<div> 
					<footer className="row d-sm-flex no-gutters bg-dark lead align-items-end text-center">
					<div className="col-md-4 text-white">
						<p className="ml-2 pt-2">Whatsapp: 2494-381079</p>
						<p className="ml-2">Tel: 2296-453507</p>
						<p className="ml-2">Mail: Fm88ayacucho@gmail.com</p>
						<p className="ml-2">Dirección España 1135</p>
						<p className="ml-2">Codigó postal: 7150</p>
					</div>
					<div className="col-md-4">
					<p className="text-center"><img src="assets/images/30años.png" alt="logo" width={200} height={200} /></p>
					</div>
					<div className="col-md-4">
						<p className="text-center text-white"><NavLink to="/" className="text-white">Top</NavLink></p>
					</div>
				</footer>
				</div>
			
		  );

	export default Footer;