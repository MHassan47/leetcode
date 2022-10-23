//  Given a string s, return the longest palindromic substring in s.

// - even/odd palindromes
// - variable that holds longest palindrome
// - loop that will loop in either direction of middle Point
// - function that will run the loops on either end

const longestPalindrome = function (s) {
  const longestPalindrome = "";

  const oddPalindrome = expandFromCenter(s, i, i);
  const evenPalindrome = expandFromCenter(s, i - 1, i);

  if (oddPalindrome.length > longestPalindrome.length) {
    longest = oddPalindrome;
  }
  if (evenPalindrome.length > longestPalindrome.length) {
    longest = evenPalindrome;
  }
  return longestPalindrome;
};

const expandFromCenter = function (str, left, right) {
  let i = 0;
  while (str[left[i]] && str[left - i] === str[right + i]) {
    i++;
  }
  i--;
  return str.slice(left - i, right + i + 1);
};
