import React, { Component } from 'react';
import {getWordData} from './Api.js';

class Word extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            wordData: [],
        }
    }

    async componentDidMount() {

        const data = await getWordData(this.props.wordToSearch);
        
        this.setState({
            isLoaded: true,
            wordData: data,
        })
    }

    render() {
        // make local variables to access the state variables
        var { isLoaded, wordData } = this.state;
    
        if(!isLoaded) {
            return (
                <div className="container">
                    <p>Loading...</p>
                </div>
            )
        } 
        else {
            return (
                <div className="container">
                    <p>{wordData.entries[0].entry} ({wordData.entries[0].lexemes[0].partOfSpeech}) - </p>
                    
                    <p>{wordData.entries[0].lexemes[0].senses[0].definition}</p>
                </div>
            );
        }
    }
}

export default Word;