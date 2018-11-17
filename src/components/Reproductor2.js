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

        <div className="text-center mt-5" onClick={this.togglePlay}>{this.state.play ? <img alt="alt" width={130} height={130} src="assets/images/playb.png"/> : <img alt="img" width={130} height={130} src="assets/images/pausena.svg" /> }
        </div>
    );
  }
}
export default Reproductor;
