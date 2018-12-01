//Dependencis
import React from 'react';

//css
import './App.css';

const Footer = () => (
				<div>
					<footer className="row d-sm-flex no-gutters bg-dblue lead align-items-end">
					<ul className="col-md-4 text-white rubik">
						<p className="ml-2 pt-2">Whatsapp: 2494-381079</p>
						<p className="ml-2">Tel: 2296-453507</p>
						<p className="ml-2">Mail: Fm88ayacucho@gmail.com</p>
						<p className="ml-2">Dirección España 1135</p>
						<p className="ml-2">Codigó postal: 7150</p>
					</ul>
					<div className="col-md-4">
					<p className="text-center"><img src="assets/images/30años.png" alt="logo" width={200} height={200} /></p>
					</div>
					<div className="col-md-4">
						<p className="text-center text-white rubik"><a href="#" className="text-white">Top</a></p>
					</div>
				</footer>
				</div>
			
		  );

	export default Footer;