export async function getWordData (wordToSearch) 
{
    var URL = "https://lingua-robot.p.rapidapi.com/language/v1/entries/en/" + wordToSearch;

    const res = await fetch(URL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "lingua-robot.p.rapidapi.com",
            "x-rapidapi-key": "52b331551bmsh5d12687ab579a71p1ecf33jsn49f8d2555110"
        }
    });
    const json = await res.json();
    return json;
}
export default {getWordData};