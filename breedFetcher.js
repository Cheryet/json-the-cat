const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function(error, response, body) {
    
    if (error) {
      return callback(error, null);
    }
    
    if (body.length < 3) { //Returns message if the breed is not found.
      return callback(`Breed ${breedName} is not found. Please enter a vaid breed`, null);
    }
    
    const data = JSON.parse(body); //converts String (Raw Data) to Object ~ deserialization ~
    const description = data[0].description;  //Grabs Description from data array, first object, key description
    
    callback(null, description);

  });

};

module.exports = { fetchBreedDescription };