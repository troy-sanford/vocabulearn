import React, { Component } from 'react';
import Word from './Word';

class WordList extends Component {

    state = {
        wordsToSearch: []
    }

    componentDidMount() {
        var appended = this.state.wordsToSearch;
        var randomWord = require('random-word-by-length');
        for (var i=0; i<5; i++) {
            var word = randomWord();
            appended.push(word);
        }
        this.setState({ wordsToSearch: appended });
    }

    render() {
        var wordList = this.state.wordsToSearch;
        return wordList.map((word) => (
            <Word wordToSearch={word}/>
        ))
    }
}

export default WordList;