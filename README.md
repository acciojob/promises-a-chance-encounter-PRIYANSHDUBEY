# Promises: A Chance Encounter

Create an array of five promises, each of which has a 50% chance of resolving with a random number between 1 and 10 or rejecting with an error. Use Promise.all to wait for all promises to settle, and then log the array of results or errors.

## Acceptance Criteria

1. Create 5 promises, such that they fail 50% of the time and the other 50% of the time, resolve to a number between 1 and 10.
2. Show the result for each promise in the following format:

- if there is an error `Promise 3 rejected with error`
- if there is no error `3`
  each of these must be written in a `p tag` in the div of ID `output` which is already created in the HTML given
