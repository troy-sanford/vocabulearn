import React, { Component } from 'react';
import WordList from './components/WordList';
import Popup from 'reactjs-popup';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="window">
          <h1>Welcome to Vocabulearn!</h1>
          <WordList/>
        </div>
      </div>
    )
  }  

}

export default App;