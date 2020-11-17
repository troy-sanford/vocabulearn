import React, { Component } from 'react';
import WordList from './components/WordList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="window">
          <h1>Welcome to Vocabulearn!</h1>
          <a href="https://github.com/troy-sanford/vocabulearn/">Link to GitHub</a>
          <WordList/>
        </div>
      </div>
    )
  }  
}

export default App;