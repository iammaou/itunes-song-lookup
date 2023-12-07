let url = `https://itunes.apple.com/search?term=${'weed'}&entity=song`;
let proxy = `https://cors-anywhere.herokuapp.com/`;

let songs;

fetch(proxy + url)
    .then(res => res.json())
    .then(res => {
        if (res.results.length === 0) {
            alert("No results found.");
        } else{
            res.results.forEach(result => {
                songs = res.results[0].trackName
            });
        }
    }
).catch((error) => {
    console.error("Error fetching data:", error);
    alert("An error occurred while fetching data.");
  });