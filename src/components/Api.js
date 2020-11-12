// export an asynchronous function to make an API call
// which accepts one parameter, the string value of the word to be searched
export async function getWordData (wordToSearch) 
{
    // the URL for the fetch API call is as below, with the word to be searched appended to the end
    var URL = "https://lingua-robot.p.rapidapi.com/language/v1/entries/en/" + wordToSearch;

    // await a response from the fetch API call
    const res = await fetch(URL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "lingua-robot.p.rapidapi.com",
            "x-rapidapi-key": "52b331551bmsh5d12687ab579a71p1ecf33jsn49f8d2555110"
        }
    });
    // store the json object returned from the API call into a local variable
    const json = await res.json();
    // return the json object
    return json;
}
export default {getWordData};