import React, { Component } from 'react';
import Word from './Word';

class WordList extends Component {

    state = {
        wordsToSearch: []
    }

    componentDidMount() {
        
        var randomWord = require('random-word-by-length');
        for (var i=0; i<10; i++) {
            var word = randomWord();
            console.log("trying word: " + word);
            this.addToList(word);
        }
    }

    addToList(word) {
        var URL = "https://lingua-robot.p.rapidapi.com/language/v1/entries/en/";
    
        fetch(URL + word, 
            {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "lingua-robot.p.rapidapi.com",
                "x-rapidapi-key": "52b331551bmsh5d12687ab579a71p1ecf33jsn49f8d2555110"
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json.entries[0]) {
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
        })
    }

    render() {
        var wordList = this.state.wordsToSearch;
        return wordList.map((word) => (
            <Word wordToSearch={word}/>
        ))
    }
}

export default WordList;