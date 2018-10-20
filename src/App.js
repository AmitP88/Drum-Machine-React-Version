import React, { Component } from 'react';
import './App.css';

class Drumpad extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);

    this.state = {
      id: '',
      sound: ''
    }
  }

  componentWillMount = (e) => {
    document.addEventListener("keydown", this.handleOnKeyDown.bind(this));
  }

  handleOnClick(event) {
    this.setState({
      id: event.target.firstElementChild.getAttribute("id"),
      sound:  event.target.firstElementChild.getAttribute("src")
    }, () => {
      let audio = document.getElementById(this.state.id);
      audio.play();
    });
  }

  handleOnKeyDown(event) {
    const eventKey = event.keyCode;

        switch(eventKey){
          case 81:
            this.setState({
              id: 'Q',
              sound:  'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
            }, () => {
              let audio = document.getElementById(this.state.id);
              audio.play();
            });
            break;

          case 87:
            this.setState({
              id: 'W',
              sound:  'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            }, () => {
              let audio = document.getElementById(this.state.id);
              audio.play();
            });
            break;

          case 69:
            this.setState({
              id: 'E',
              sound:  'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            }, () => {
              let audio = document.getElementById(this.state.id);
              audio.play();
            });
            break;

          case 65:
            this.setState({
              id: 'A',
              sound:  'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
            }, () => {
              let audio = document.getElementById(this.state.id);
              audio.play();
            });
            break;

          case 83:
            this.setState({
              id: 'S',
              sound:  'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
            }, () => {
              let audio = document.getElementById(this.state.id);
              audio.play();
            });
            break;

          case 68:
            this.setState({
              id: 'D',
              sound:  'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            }, () => {
              let audio = document.getElementById(this.state.id);
              audio.play();
            });
            break;

          case 90:
            this.setState({
              id: 'Z',
              sound:  'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
            }, () => {
              let audio = document.getElementById(this.state.id);
              audio.play();
            });
            break;

          case 88:
            this.setState({
              id: 'X',
              sound:  'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
            }, () => {
              let audio = document.getElementById(this.state.id);
              audio.play();
            });
            break;

          case 67:
            this.setState({
              id: 'C',
              sound:  'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
            }, () => {
              let audio = document.getElementById(this.state.id);
              audio.play();
            });
            break;

          default:
            console.log('invalid key');
        }



  }



  render() {
    return (
      <div className="container">
        <div id="display">{this.state.id}</div>
        <div className="Pad">
          <button className="drum-pad" id="music-1" onClick={ this.handleOnClick } onKeyDown={ this.handleOnKeyDown } >
            Q
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
          </button>
          <button className="drum-pad" id="music-2" onClick={ this.handleOnClick } onKeyDown={ this.handleOnKeyDown } >
            W
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
          </button>
          <button className="drum-pad" id="music-3" onClick={ this.handleOnClick } onKeyDown={ this.handleOnKeyDown } >
            E
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>        
          </button>
          <button className="drum-pad" id="music-4" onClick={ this.handleOnClick } onKeyDown={ this.handleOnKeyDown } >
            A
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
          </button>
          <button className="drum-pad" id="music-5" onClick={ this.handleOnClick } onKeyDown={ this.handleOnKeyDown } >
            S
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio> 
          </button>
          <button className="drum-pad" id="music-6" onClick={ this.handleOnClick } onKeyDown={ this.handleOnKeyDown } >
            D
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
          </button>
          <button className="drum-pad" id="music-7" onClick={ this.handleOnClick } onKeyDown={ this.handleOnKeyDown } >
            Z
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
          </button>
          <button className="drum-pad" id="music-8" onClick={ this.handleOnClick } onKeyDown={ this.handleOnKeyDown } >
            X
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
          </button>
          <button className="drum-pad" id="music-9" onClick={ this.handleOnClick } onKeyDown={ this.handleOnKeyDown } >
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
        <h1>Drum Machine</h1>
        <Drumpad />
      </div>
    );
  }
}

export default App;
