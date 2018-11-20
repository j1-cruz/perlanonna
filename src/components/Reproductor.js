import React, {Component} from 'react';

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
      <div className="mt-4 animated bounceIn">
        <span className="animated" onClick={this.togglePlay} data-toggle="tooltip" data-placement="top" title="Escuchanos!">{this.state.play ? <img alt="alt" width={160} height={160} src="assets/images/playb.png"/> : <img alt="img" width={160} height={160} src="assets/images/pausena.svg"/> }</span>
      </div>
    );
  }
}


export default Reproductor;
