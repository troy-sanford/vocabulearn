import React, { Component } from 'react';
import {getWordData} from './Api.js';

class Word extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // state variable to track whether the relevant word data has loaded
            isLoaded: false,
            // empty json object to store data returned by API call
            wordData: [],
        }
    }

    // called every time the Word component is mounted,
    // asynchronous because it must wait for the API call to return the json object
    async componentDidMount() {

        // make API call, passing the prop received from WordList component (the word to be searched) as parameter,
        // and store the json object returned by API call in local variable
        const data = await getWordData(this.props.wordToSearch);
        
        // set state variables accordingly
        this.setState({
            // content was loaded, set isLoaded to true
            isLoaded: true,
            // store json object returned by API call in the wordData variable
            wordData: data,
        })
    }

    // function to generate a random rgb value to be used for backgroundColor for each Word container
    generateRandomColor() {
        let r = Math.round((Math.random() * 255));
        let g = Math.round((Math.random() * 255));
        let b = Math.round((Math.random() * 255));
        return 'rgb('+ r +', '+ g +', '+ b +')';
    }

    render() {
        // make local variables to access the state variables
        var { isLoaded, wordData } = this.state;
    
        // if content is not yet loaded...
        if(!isLoaded) {
            // return a container that simply indicates that the component is still loading
            return (
                <div className="container">
                    <p>Loading...</p>
                </div>
            )
        } 
        // if the content has loaded...
        else {
            // organize data from json object into local variables
            // the json objects for different words are organized uniquely, and may or may not contain the same data
            // the only consistent data for all words are the part of speech and the definition
            var word = wordData.entries[0].entry;
            var partOfSpeech = wordData.entries[0].lexemes[0].partOfSpeech;
            var definition = wordData.entries[0].lexemes[0].senses[0].definition;
            
            // return a container that displays the word data,
            // and set the backgroundColor to a randomly generated color
            return (
                <div className="container" style={{backgroundColor: this.generateRandomColor()}}>
                    <p>{word} ({partOfSpeech}) - </p>
                    
                    <p>{definition}</p>
                </div>
            );
        }
    }
}

export default Word;