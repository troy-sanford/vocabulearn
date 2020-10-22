import React, { Component } from 'react';
import WordList from './components/WordList';
import './App.css';

class App extends Component {

  // TO DO: Write function to generate list of random words, save them to App.js state
  state = {
    wordsToSearch: []
  }

  makeDailyWordList() {
    var randomWord = require('random-word-by-length');
    for (var i = 0; i < 2; i++) {
      this.state.wordsToSearch.push(randomWord());
    }
  }

  render() {
    this.makeDailyWordList();
    return (
      <div className="App">
        <div className="window">
          <h1>Welcome to VocabuLearn!</h1>
          <WordList wordsToSearch={this.state.wordsToSearch}/>
        </div>
      </div>
    )
  }  

}

export default App;
