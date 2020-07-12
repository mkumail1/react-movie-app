import React, { Component } from 'react';
import Movies from './components/movies'
import './App.css';

class App extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <Movies></Movies>
      </div >
    );
  }
}

export default App;
