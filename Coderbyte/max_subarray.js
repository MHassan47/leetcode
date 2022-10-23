/*
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
 * the contiguous subarray [4,−1,2,1] has the largest sum = 6.
 */

// sliding window
// loop across array
// variable that stores the max sum

const maxSubarray = (array) => {
  let largestSum = array[0];
  let currentSum = array[0];
  for (let i = 0; i < array.length; i++) {
    currentSum = Math.max(currentSum + array[i], array[i]);
    largestSum = Math.max(currentSum, largestSum);
  }
  return largestSum;
};

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, -6, 3, -5, 4]));
