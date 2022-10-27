const request = require('request');
const breed = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, function(error, response, body) {
  
  if (error) return console.error('error:', error); // Print the error if one occurred

  if (body.length < 3) { //Returns message if the breed is not found.
    return console.log(`Error: Breed ${breed} is not found. Please enter a vaid breed`);
  }
  
  const data = JSON.parse(body); //converts String (Raw Data) to Object ~ deserialization ~
  console.log('Description :', data[0].description); //accesses body Object to Print Desc.

});