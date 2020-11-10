import React, { Component } from 'react';
import Word from './Word';
import {getWordData} from './Api.js';

class WordList extends Component {

    state = {
        wordsToSearch: []
    }

    componentDidMount() {

        var randomWord = require('random-word-by-length');
        for (var i=0; i<5; i++) {
            var word = randomWord();
            console.log("trying word: " + word);
            this.addToList(word);
        }
    }

    async addToList(word) {
        
        const data = await getWordData(word);

        if (data.entries[0]) {
            var appended = this.state.wordsToSearch;
            appended.push(word);
            this.setState({ wordsToSearch: appended });
        }
        else {
            var randomWord = require('random-word-by-length');
            var newWord = randomWord();
            console.log(word + " was not found in dictionary, trying new word: " + newWord);
            this.addToList(newWord);
        }
    }

    render() {
        var wordList = this.state.wordsToSearch;
        return wordList.map((word) => (
            <Word wordToSearch={word}/>
        ))
    }
}

export default WordList;