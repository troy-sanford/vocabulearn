import React, { Component } from 'react';

class Word extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            wordData: [],
        }
    }

    componentDidMount() {

        var wordToSearch = this.props.wordToSearch;

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