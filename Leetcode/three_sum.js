// Given an integer array nums, return all the triplets [nums[i],
// nums[j], nums[k]] such that i != j, i != k, and j != k,
//  and nums[i] + nums[j] + nums[k] == 0.

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const target = 0 - nums[i];

    let left = i + 1;
    let right = nums.length - 1;
    while (right > left) {
      const sum = nums[right] + nums[left];

      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        results.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return results;
};
