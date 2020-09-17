import React, { Component } from 'react';
import Word from './Word';

class WordList extends Component {
    render() {
        var wordsToSearch = this.props.wordsToSearch;
        console.log(wordsToSearch);
        return wordsToSearch.map((word) => (
            <Word wordToSearch={word}/>
        ))
    }
}

export default WordList;