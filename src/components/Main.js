//Dependencis
import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Components
import Programas from './Programas';
import { PROGRAMAS } from '../shared/programas';
import Navbar from './Navbar';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';


class Main extends Component {

      constructor(props){
        super(props);

        this.state = {
            programas: PROGRAMAS
        };
      }

  render() {
    return (   
         <Router>
          <div>
            <Navbar />
            <Nav />
              <Switch>
                <Route path="/programas" component={() => <Programas programas={this.state.programas} />} />
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
