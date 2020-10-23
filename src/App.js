import React, { Component } from 'react';
import WordList from './components/WordList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="window">
          <h1>Welcome to VocabuLearn!</h1>
          <WordList/>
        </div>
      </div>
    )
  }  

}

export default App;
