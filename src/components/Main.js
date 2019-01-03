//Dependencis
import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Components
import Header from './Header';
import Footer from './Footer';
import Home from './Home';


class Main extends Component {

  render() {
    return (   
         <Router>
          <div>
            <Home />
              <Switch>
                <Route path="/header" component={Header} />
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
