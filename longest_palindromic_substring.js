//  Given a string s, return the longest palindromic substring in s.

// - even/odd palindromes
// - variable that holds longest palindrome
// - loop that will loop in either direction of middle Point
// - function that will run the loops on either end

const longestPalindrome = function(s) {
    let longestPalindrome = "";

  for (let i = 0; i < s.length; i++){
let oddPalindrome = expandFromCenter(s, i, i);
let evenPalindrome = expandFromCenter(s, i - 1, i);

if (oddPalindrome.length > longestPalindrome.length) {
  longestPalindrome = oddPalindrome;
}
if (evenPalindrome.length > longestPalindrome.length) {
  longestPalindrome = evenPalindrome;
}
  }
return longestPalindrome;
};

function expandFromCenter(str, left, right) {
let i = 0;
while (str[left -i] && str[left - i] === str[right+i]) {
  i++;
}
i--;
return str.slice(left - i, right + i + 1);
};