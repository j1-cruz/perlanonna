//Dependencis
import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Components
import Productos from './Productos';
import Footer from './Footer';
import Home from './Home';
import Mates from './productos/mates/Mates2';
import Tazas from './productos/tazas/Tazas';
import { PRODUCTOS } from '../shared/productos';
import { MATES } from './productos/mates/mates';

class Main extends Component {
    constructor(props){
      super(props);

      this.state = {
        productos: PRODUCTOS
      }
    }

  render() {
    return (   
         <Router>
          <div>
            <Home />
              <Switch>
                <Route exact path="/" component={() => <Productos productos={this.state.productos} />} />
                <Route  path="/mates" component={Mates} />
                <Route  path="/tazas" component={Tazas} />
                <Redirect to="/home" /> 
              </Switch>
            <Footer />
          </div>
        </Router>     
    );
  }
}

export default Main;
