

var axios = require("axios");


axios.get("https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  })
 axios.get(("https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`").then(
    function(response) {
      console.log("The Song's rating is: " + response.data.imdbRating);
    })
    .then(
    function(response) {
      console.log("The movie's rating is: " + response.data.imdbRating);
    })


  .catch(function(error) {
    if (error.response) {
      
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
     
      console.log(error.request);
    } else {
      
      console.log("Error", error.message);
    }
    console.log(error.config);
  });