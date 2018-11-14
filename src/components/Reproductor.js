import React, {Component} from 'react';

//Imgenes
import Play from './imagenes/playb.png';
import Pause from './imagenes/pausena.svg';

class Reproductor extends Component {
  constructor(props) {
    super(props);
    this.state = { play: true };
    this.url = "http://streamall.alsolnet.com:443/ayacuchofm";
    this.audio = new Audio(this.url);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    this.setState({ play: !this.state.play });
    console.log(this.audio);
    this.state.play ? this.audio.play() : this.audio.pause();
  }

  render() {
    return (
      <div className="mr-2" data-toggle="tooltip" data-placement="top" title="Escuchanos!" >
        <span onClick={this.togglePlay}>{this.state.play ? <img alt="alt" width={60} height={60} src={Play}/> : <img alt="img" width={60} height={60} src={Pause}/> }</span>
      </div>
    );
  }
}


export default Reproductor;
