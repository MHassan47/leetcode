/*
 * Have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of
 * integers needed to make the contents of arr consecutive from the lowest number to the highest number.
 * For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the
 * array (5 and 7) to make it a consecutive array of numbers from 4 to 8.
 * Negative numbers may be entered as parameters and no array will have less than 2 elements.
 */

const Consecutive = (arr) => {
  arr.sort((a, b) => a - b);
  let solution = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      solution++;
    }
  }
  return solution;
};

// - sort the Array
// - counter
// - loop through Array

const consecutive = (arr) => {
  counter = 0;
  arr = arr.sort((a, b) => a - b);

  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    counter += arr[right] - arr[left] - 1;
    left++;
  }

  return counter;
};

console.log(consecutive([4, 9, 11, -1]));
