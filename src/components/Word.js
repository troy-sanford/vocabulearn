import React, { Component } from 'react';

class Word extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wordData: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        var wordToSearch = "mathematics";
        var URL = "https://lingua-robot.p.rapidapi.com/language/v1/entries/en/" + wordToSearch;
    
        fetch(URL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "lingua-robot.p.rapidapi.com",
                "x-rapidapi-key": "52b331551bmsh5d12687ab579a71p1ecf33jsn49f8d2555110"
            }
        })
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                wordData: json,
            })
        })
    }

    render() {
        // make local variables to access the state variables
        var { isLoaded, wordData } = this.state;
    
        if(!isLoaded) {
            return (
                <div className="window">
                    <p>Loading...</p>
                </div>
            )
        } 
        else {
            console.log(wordData);
            return (
                <div className="window">
                    <h1>Welcome to Vocabulearn!</h1>
                    <div className="container">
                        <p>Word: {wordData.entries[0].entry} ({wordData.entries[0].lexemes[0].partOfSpeech})</p>
                        <p>Definition: {wordData.entries[0].lexemes[0].senses[0].definition}</p>
                    </div>
                </div>
            );
        }
    }
}

export default Word;