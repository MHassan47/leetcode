// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

const maxArea = function (height) {
  let area = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    const possibleMax = (j - 1) * Math.min(height[i], height[j]);
    area = Math.max(area, possibleMax);
    if (height[i] > height[j]) {
      j--;
    }
    i++;
  }
  return area;
};
