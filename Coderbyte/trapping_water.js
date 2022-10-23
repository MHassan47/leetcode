// Given n non-negative integers representing an elevation map where the
// width of each bar is 1, compute how much water it can trap after raining.

const trappingWater = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let total = 0;
  let maxL = arr[left];
  let maxR = arr[right];
  while (left < right) {
    if (maxL < maxR) {
      left++;
      maxL = Math.max(maxL, arr[left]);
      total += maxL - arr[left];
    } else {
      right--;
      maxR = Math.max(maxR, arr[right]);
      total += maxR - arr[right];
    }
  }
  return total;
};

console.log(trappingWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
