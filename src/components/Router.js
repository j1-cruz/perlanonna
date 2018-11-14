//Dependencis
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

//Components
import Home from './Home';
import Page404 from './Page404.js';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import {PROGRAMAS} from '/shared/programas';

export default class App extends Component {
	constructor(props){
	  super(props);

	  this.state = {
		programas: PROGRAMAS
	  };
	}

render() {
  return (
	<div className="bg-dwhite">
	  <BrowserRouter>
			<Router>
			  <Navbar />
			  <Switch programas={this.state.programas}>
				      <Route exact path="/" component={Home} />
				      <Route exact path="/Header" component={Header} />
				      <Route component={Page404} />
			  </Switch>
				<Footer />
			 </Router>
			</BrowserRouter>
	</div>
  );
}
}

		
	 
