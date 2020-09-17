import React, { Component } from 'react';
import WordList from './components/WordList';
import './App.css';

class App extends Component {

  // TO DO: Write function to generate list of random words, save them to App.js state
  state = {
    wordsToSearch: [
      "articulation",
      "mathematics",
      "adjacency",
      "albatross"
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="window">
          <h1>Welcome to Vocabulearn!</h1>
          <WordList wordsToSearch={this.state.wordsToSearch}/>
        </div>
      </div>
    )
  }  

}

export default App;
