const breedName = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, desc) => {

  if (error) {
    console.log('Error Details: ', error);
  } else {
    console.log(desc);
  }

});