//Dependencis
import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Components
import Programas from './Programas';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';


class Main extends Component {

  render() {
    return (   
         <Router>
          <div>
            <Home />
            <Nav />
              <Switch>
                <Route path="/programas" component={Programas} />
                <Route exact path="/" component={Header} />
                <Redirect to="/home" /> 
              </Switch>
            <Footer />
          </div>
        </Router>     
    );
  }
}

export default Main;
