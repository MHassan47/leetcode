/*
The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  const sortedNums = nums.sort((a, b) => a - b);

  let maxLength = 0;

  let currentSum = 0;
  let leftWindow = 0;
  for (let rightWindow = 0; rightWindow < sortedNums.length; rightWindow++) {
    const currentLength = rightWindow - leftWindow + 1;
    const rightNum = sortedNums[rightWindow];
    currentSum += rightNum;

    if (currentSum + k >= rightNum * currentLength) {
      maxLength = currentLength;
      console.log(maxLength);
    } else {
      const leftNum = sortedNums[leftWindow];
      currentSum -= leftNum;
      leftWindow++;
    }
  }
  return maxLength;
};
