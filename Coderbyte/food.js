function FoodDistribution(arr) {
  // Sort the array of hunger levels in non-ascending order
  let N = arr[0];
  arr.pop();
  arr.sort((a, b) => b - a);

  // Initialize variables
  let diff = 0;
  console.log(arr);
  // Iterate through the sorted array of hunger levels
  for (let i = 0; i < arr.length - 1; i++) {
    // Give the current person min(h, N) sandwiches
    let sandwiches = Math.min(arr[i], N);
    arr[i] -= sandwiches;
    N -= sandwiches;

    // Update diff by the difference between the current person's hunger level and the next person's hunger level
    diff += Math.abs(arr[i] - arr[i + 1]);
  }

  return diff;
}

console.log(FoodDistribution([4, 5, 2, 3, 1, 0]));
