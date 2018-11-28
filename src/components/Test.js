//Dependencis
import React, { Component} from 'react';
import { BrowserRouter as HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
//Components
import { PROGRAMAS } from '../shared/programas';


class Test extends Component {

      constructor(props){
        super(props);

        this.state = {
            programas: PROGRAMAS
        };
      }

  render() {
    return (   
        <div>
        <HashRouter>
            <div>
            <Link to={this.programas.id}>Question 1</Link> 
            <Link to="#faq-2">Question 2</Link> 
            <Link to="#faq-3">Question 3</Link> 
            </div>
        </HashRouter>
         
        <div id="faq-1" className="mt-5 p-5">
        {this.state.programas.id}
        </div>
        <div id="faq-2" className="mt-5 p-5">
            <h1>whaaatss</h1>
        </div>
        <div id="faq-3" className="mt-5 p-5">
            <h1>ppppppppp</h1>
        </div>

       </div>
    );
  }
}

export default Test;