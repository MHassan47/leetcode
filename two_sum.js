/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order */

const twoSum = function (num, target) {
  const prevNum = {};
  for (let i = 0; i < num.length; i++) {
    const currentNum = num[i];
    const neededNum = target - currentNum;
    const index2 = prevNum[neededNum];
    if (index2 != null) {
      return [index2, i];
    } else {
      prevNum[currentNum] = i;
    }
  }
};
