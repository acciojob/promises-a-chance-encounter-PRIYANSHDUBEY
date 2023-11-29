//your JS code here. If required.
// script.js
const outputDiv = document.getElementById('output');

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create a promise with a 50% chance of resolving with a random number or rejecting with an error
function createRandomPromise() {
  const randomNumber = getRandomNumber(1, 10);
  const shouldReject = Math.random() < 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`Rejected with error`);
      } else {
        resolve(randomNumber);
      }
    }, getRandomNumber(1000, 5000)); // Random time between 1 and 5 seconds
  });
}

// Array of 5 promises
const promises = Array.from({ length: 5 }, (_, index) => createRandomPromise(index + 1));

// Use Promise.all to wait for all promises to settle
Promise.allSettled(promises)
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        outputDiv.innerHTML += `<p>Promise ${index + 1} resolved with result: ${result.value}</p>`;
      } else {
        outputDiv.innerHTML += `<p>Promise ${index + 1} rejected with error: ${result.reason}</p>`;
      }
    });
  }); 