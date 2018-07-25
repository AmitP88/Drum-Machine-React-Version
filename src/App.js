import React, { Component } from 'react';
import './App.css';

class Drumpad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Pad">
        <button className="drumpad" id="music-1">
          Q
          <audio src="#" className="clip" id="Q"></audio>
        </button>
        <button className="drumpad" id="music-2">
          W
          <audio src="#" className="clip" id="W"></audio>
        </button>
        <button className="drumpad" id="music-3">
          E
          <audio src="#" className="clip" id="E"></audio>        
        </button>
        <button className="drumpad" id="music-4">
          A
          <audio src="#" className="clip" id="A"></audio>        
        </button>
        <button className="drumpad" id="music-5">
          S
          <audio src="#" className="clip" id="S"></audio> 
        </button>
        <button className="drumpad" id="music-6">
          D
          <audio src="#" className="clip" id="D"></audio>
        </button>
        <button className="drumpad" id="music-7">
          Z
          <audio src="#" className="clip" id="Z"></audio>
        </button>
        <button className="drumpad" id="music-8">
          X
          <audio src="#" className="clip" id="X"></audio>
        </button>
        <button className="drumpad" id="music-9">
          C
          <audio src="#" className="clip" id="C"></audio>
        </button>
      </div>
    );
  }
};

const Display = () => <div id="display"></div>

class App extends Component {
  render() {
    return (
      <div className="App" id="drum-machine">
        <Display />
        <Drumpad />
      </div>
    );
  }
}

export default App;
