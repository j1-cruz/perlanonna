import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import {PROGRAMAS} from './shared/programas';

class App extends Component {
      constructor(props){
        super(props);

        this.state = {
          programas: PROGRAMAS
        };
      }

  render() {
    return (
      <div className="bg-dwhite">
        <Navbar />
        <Header programas={this.state.programas} />
      </div>
    );
  }
}

export default App;
