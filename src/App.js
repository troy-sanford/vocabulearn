import React, { Component } from 'react';
import Word from './components/Word';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="window">
          <h1>Welcome to Vocabulearn!</h1>
          <Word />
        </div>
      </div>
    )
  }  

}

export default App;
