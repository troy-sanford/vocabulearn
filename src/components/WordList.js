import React, { Component } from 'react';
import Word from './Word';
import {getWordData} from './Api.js';

class WordList extends Component {

    state = {
        // empty array to store string values of words to be searched
        wordsToSearch: [],
    }

    // called whenever a WordList component is mounted
    // generates list of random words to append to wordsToSearch state variable
    componentDidMount() {

        // uses random-word-by-length package from npm to generate a random word with optional max length
        var randomWord = require('random-word-by-length');

        // we want to display 5 words, so iterate 5 times
        for (var i=0; i<5; i++) {
            // create a variable to hold the string value of a randomly generated word
            var word = randomWord();
            // make a log of the word we are attempting to add to the list
            console.log("trying word: " + word);
            // call addToList function, passing the random word we just generated as an argument
            this.addToList(word);
        }
    }

    // an asynchronous, recursive API call to validate that the dictionary we are using is able to return
    // the necessary data for each word
    // accepts a String value "word" as parameter
    async addToList(word) {
        
        // pass the word as an argument to the getWordData function,
        // which makes the API call and returns the json object containing data about the word
        const data = await getWordData(word);

        // if the json object is not empty, then the word is usable, and is added to the wordsToSearch state variable
        if (data.entries[0]) {
            // we cannot manipulate the wordsToSearch array directly, because it is a state variable
            // so make a dummy array which is equivalent to the current state of the wordsToSearch array,
            var appended = this.state.wordsToSearch;
            // append new word to dummy array
            appended.push(word);
            // set wordsToSearch array to the current value of the dummy array (after appending the word)
            this.setState({ wordsToSearch: appended });
        }
        // if the json object is empty, our API service does not store any info about this word
        else {
            // instantiate new instance of random-word-by-length package to generate new word
            var randomWord = require('random-word-by-length');
            // create variable to hold string value of the new word
            var newWord = randomWord();
            // make a log of the word which failed, and the new word we are attempting to use
            console.log(word + " was not found in dictionary, trying new word: " + newWord);
            // recursively call the addToList function, this time passing the new word as the argument
            this.addToList(newWord);
        }
    }

    render() {
        // create local variables to access state variables
        var wordList = this.state.wordsToSearch;
        // iterate through our list of words, passing each element in the array,
        // and a randomly generated color as props to the Word component
        return wordList.map((word) => (
            <Word wordToSearch={word}/>
        ))
    }
}

export default WordList;