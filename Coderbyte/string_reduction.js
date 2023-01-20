/*Have the function StringReduction(str) take the str parameter being passed and return the smallest number you can get through the following reduction method. The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters 
and replace it with the third. For example "ac" can be replaced with "b" but "aa" 
cannot be replaced with anything. This method is done repeatedly until the string 
cannot be further reduced, and the length of the resulting string is to be 
outputted. For example: if str is "cab", "ca" can be reduced to "b" and you get 
"bb" (you can also reduce it to "cc"). The reduction is done so the output should 
be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces 
to "c", and the final string "ac" is reduced to "b" so the output should be 1. */

var frequencySort = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  //   console.log(map);
  return nums.sort((a, b) => {
    if (map[a] === map[b]) {
      return b - a;
    }
  

    return map[a] - map[b];
  });

  
};

// arr = [1, 1, 2, 2, 2, 3];
// arr.sort((a, b) => a - b);
// console.log(arr);
console.log(frequencySort([1, 1, 2, 2, 2, 3]));
