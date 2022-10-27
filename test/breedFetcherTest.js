const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      // we expect no error for this scenario
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });


  it('returns error message if the breed input is invaild', (done) => {
    fetchBreedDescription('Dog', (error, desc) => {

      assert.equal(desc, null);

      const expectedError = `Breed Dog is not found. Please enter a vaid breed`;
      assert.equal(expectedError, error);

      
      done();
    });
    
  });
});