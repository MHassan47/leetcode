// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

var countSubstrings = function (s) {
  let solution = 0;

  for (let i = 0; i < s.length; i++) {
    let l = i;
    let r = i;
    while (l >= 0 && r < s.length && s[r] === s[l]) {
      solution++;
      l--;
      r++;
    }
    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[r] === s[l]) {
      solution++;
      l--;
      r++;
    }
  }
  return solution;
};
