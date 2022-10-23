/*
Using the Python language, have the function KUniqueCharacters(str)
take the str parameter being passed and find the longest substring
that contains k unique characters, where k will be the first character
from the string. The substring will start from the second position
in the string because the first character will be the integer k.
For example: if str is "2aabbacbaa" there are several substrings
that all contain 2 unique characters, namely: ["aabba", "ac", "cb", "ba"],
but your program should return "aabba" because it is the longest substring.
If there are multiple longest substrings, then return the first substring
encountered with the longest length. k will range from 1 to 6. 
Input:"3aabacbebebe"
Output:"cbebebe"
Input:"2aabbcbbbadef"
Output:"bbcbbb"
*/

// const uniqueChars = (str) => {
//   const uniqueNumber = str[0];
//   let longest = 0;
//   let left = 1;
//   for (let right = 1; right < str.length; right++) {
//     let count = 0;
//     let map = {};
//     while (count < uniqueNumber) {
//       if (map[str[right]] === undefined) {
//         map[str[right]] = true;
//         count++;
//         console.log(map);
//       }
//     }
//     if (count === uniqueNumber) {
//       longest = Math.max(longest, right - left);
//       left = right + 1;
//       count = 0;
//     }
//   }
//   return longest;
// };

// if (map[str[right]] === undefined) {
//   map[str[right]] = true;
//   count++;
//   if (count === uniqueChars) {
//     let possible = str.slice(left, right + 1);
//     console.log(possible);
//     solutions.push(possible);

//     left = right + 1;
//   }
// }

const uniqueChars = (str) => {
  const uniqueNumber = str[0];
  let solution = "";
  let longest = 0;
  let left = 1;
  let map = {};
  for (let right = 1; right < str.length; right++) {
    let count = 0;
    while (count < uniqueNumber) {
      if (map[str[right]] === undefined) {
        map[str[right]] = 1;
        count++;
        console.log(map);
      } else {
        map[str[right]]++;
      }
    }
    if (count === uniqueNumber) {
      longest = Math.max(longest, right - left);
      left = right + 1;
      count = 0;
    }
  }
  return longest;
};

console.log(uniqueChars("3aabacbebebe"));
