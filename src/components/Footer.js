//Dependencis
import React, {Component} from 'react';
import {FOOTER} from '/shared/footer';

//css
import './App.css';

export default class Footer extends Component () => {
	constructor(props){
		super(props);

		this.state = {
			foter: foter
		};
	}

				<footer programas={this.state.programas} className="row d-none d-sm-flex no-gutters bg-dark bordertop lead align-items-end text-center">
					<div className="col-md-4 text-white">
						<p className="ml-2">Whatsapp: 2494-381079</p>
						<p className="ml-2">Tel: 2296-453507</p>
						<p className="ml-2">Mail: Fm88ayacucho@gmail.com</p>
						<p className="ml-2">Dirección España 1135</p>
						<p className="ml-2">Codigó postal: 7150</p>
					</div>
					<div className="col-md-4">
					<p className="text-center"><img alt="imagenradio" src={RadioImage} width={200} height={200} /></p>
					</div>
					<div className="col-md-4">
						<p className="text-center text-white"><a href="#" className="text-white">Top</a></p>
					</div>
				</footer>

	   );