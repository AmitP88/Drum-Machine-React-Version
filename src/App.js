import React, { Component } from 'react';
import './App.css';

class Drumpad extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      id: '',
      sound: ''
    }
  }

  handleOnClick(event) {
    this.setState({
      id: event.target.firstElementChild.getAttribute("id"),
      sound:  event.target.firstElementChild.getAttribute("src")
    }, () => {
      console.log("audio-id : ", this.state.id);
      console.log("sound-url : ", this.state.sound);

      let audio = document.getElementById(this.state.id);
      audio.play();
    });
  }



  render() {
    return (
      <div className="container">
        <div id="display">{this.state.id}</div>
        <div className="Pad">
          <button className="drum-pad" id="music-1" onClick={ this.handleOnClick }>
            Q
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
          </button>
          <button className="drum-pad" id="music-2" onClick={ this.handleOnClick }>
            W
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
          </button>
          <button className="drum-pad" id="music-3" onClick={ this.handleOnClick }>
            E
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>        
          </button>
          <button className="drum-pad" id="music-4" onClick={ this.handleOnClick }>
            A
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
          </button>
          <button className="drum-pad" id="music-5" onClick={ this.handleOnClick }>
            S
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio> 
          </button>
          <button className="drum-pad" id="music-6" onClick={ this.handleOnClick }>
            D
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
          </button>
          <button className="drum-pad" id="music-7" onClick={ this.handleOnClick }>
            Z
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
          </button>
          <button className="drum-pad" id="music-8" onClick={ this.handleOnClick }>
            X
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
          </button>
          <button className="drum-pad" id="music-9" onClick={ this.handleOnClick }>
            C
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
          </button>
        </div>      
      </div>
    );
  }
};

class App extends Component {
  render() {
    return (
      <div className="App" id="drum-machine">
        <Drumpad />
      </div>
    );
  }
}

export default App;
