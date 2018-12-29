//Dependencis
import React from 'react';

//css
import './App.css';

const Footer = () => (
				<div>
					<footer className="row d-sm-flex no-gutters lead align-items-end">
					<ul className="col-md-4 rubik text-center mt-2">
						<li className="ml-2">Whatsapp: 2494-381079</li>
						<li className="ml-2">Tel: 2296-453507</li>
						<li className="ml-2">Mail: Fm88ayacucho@gmail.com</li>
						<li className="ml-2">Dirección: España 1135</li>
						<li className="ml-2">Codigó postal: 7150</li>
					</ul>
					<div className="col-md-4">
					<p className="text-center"><img src="assets/images/30años.png" alt="logo" width={200} height={200} /></p>
					</div>
					<div className="col-md-4">
                        <p className="text-center">
						<a href="#" className="fa fa-arrow-up fa-lg"></a></p>
					</div>
				</footer>
				</div>
			
		  );

	export default Footer;