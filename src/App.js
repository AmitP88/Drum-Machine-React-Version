import React, { Component } from 'react';
import './App.css';

class Drumpad extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      played: ''
    }
  }

  handleOnClick(event) {
    this.setState({
      played: event.target.getAttribute("id")
    });
  }

  render() {
    return (
      <div className="container">
        <div id="display">{this.state.played}</div>
        <div className="Pad">
          <button className="drum-pad" id="music-1" onClick={ this.handleOnClick }>
            Q
            <audio src="#" className="clip" id="Q"></audio>
          </button>
          <button className="drum-pad" id="music-2" onClick={ this.handleOnClick }>
            W
            <audio src="#" className="clip" id="W"></audio>
          </button>
          <button className="drum-pad" id="music-3" onClick={ this.handleOnClick }>
            E
            <audio src="#" className="clip" id="E"></audio>        
          </button>
          <button className="drum-pad" id="music-4" onClick={ this.handleOnClick }>
            A
            <audio src="#" className="clip" id="A"></audio>        
          </button>
          <button className="drum-pad" id="music-5" onClick={ this.handleOnClick }>
            S
            <audio src="#" className="clip" id="S"></audio> 
          </button>
          <button className="drum-pad" id="music-6" onClick={ this.handleOnClick }>
            D
            <audio src="#" className="clip" id="D"></audio>
          </button>
          <button className="drum-pad" id="music-7" onClick={ this.handleOnClick }>
            Z
            <audio src="#" className="clip" id="Z"></audio>
          </button>
          <button className="drum-pad" id="music-8" onClick={ this.handleOnClick }>
            X
            <audio src="#" className="clip" id="X"></audio>
          </button>
          <button className="drum-pad" id="music-9" onClick={ this.handleOnClick }>
            C
            <audio src="#" className="clip" id="C"></audio>
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
