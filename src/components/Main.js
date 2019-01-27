//Dependencis
import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Components
import Productos from './Productos';
import Footer from './Footer';
import Home from './Home';
import Mates from './productos/mates/Mates2';
import Tazas from './productos/tazas/Tazas';
import Chops from './productos/chops/Chops';
import Cuencos from './productos/cuencos/Cuencos';
import Sets from './productos/sets/Sets';
import { PRODUCTOS } from '../shared/productos';

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
                <Route  path="/chops" component={Chops} />
                <Route  path="/cuencos" component={Cuencos} />
                <Route  path="/sets" component={Sets} />
                <Redirect to="/home" /> 
              </Switch>
            <Footer />
          </div>
        </Router>     
    );
  }
}

export default Main;
