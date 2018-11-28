//Dependencis
import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Components
import Programas from './Programas';
import Navbar from './Navbar';
import Header from './Header'
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';


class Main extends Component {

  render() {
    return (   
         <Router>
          <div>
            <Navbar />
            <Header />
            <Nav />
              <Switch>
                <Route path="/programas" component={Programas} />
                <Route exact path="/" component={Home} />
                <Redirect to="/home" /> 
              </Switch>
            <Footer />
          </div>
        </Router>     
    );
  }
}

export default Main;
