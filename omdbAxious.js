var axios = require("axios");

// We then run the request with axios module on a URL with a JSON
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function (response) {
        // Then we print out the imdbRating
        console.log("The movie's rating is: " + response.data.imdbRating);
    }
);
axios.get("https://www.npmjs.com/package/node-spotify-api").then(
    function (response) {
        console.log("artist rating")
    }
);

axios.get("http://www.artists.bandsintown.com/bandsintown-api").then(
    function (response) {
        console.log("artist rating")
    }
);


axios.get("https://www.npmjs.com/package/moment").then(
    function (response) {
        console.log("artist rating")
    }
);

axios.get("https://www.npmjs.com/package/dotenv").then(
    function (response) {
        console.log("artist rating")
    }
);

