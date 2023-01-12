// * Have the function arrayAdditionI(arr) take the array of numbers stored in arr
//  * and return the string true if any combination of numbers in the array
//  * (excluding the largest number) can be added up to equal the largest number in
//  * the array, otherwise return the string false. For example: if arr contains
//  * [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 =
//  * 23. The array will not be empty, will not contain all the same elements, and
//  * may contain negative numbers.

const arrayAddition = (arr) => {
  arr.sort((a, b) => a - b);

  let target = arr[arr.length - 1];
  console.log(target);
  let left = 0;
  let sum = arr[left];
  for (let right = 1; right < arr.length - 1; right++) {
    console.log(sum);
    if (target > sum) {
      sum += arr[right];
    }
    if (target < sum) {
      sum -= arr[left];
      left++;
    }
    if (target === sum) return "true";
  }
  return "false";
};

console.log(arrayAddition([4, 6, 3, 10, 1, 3]));
