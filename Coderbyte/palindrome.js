// * Have the function palindrome(str) take the str parameter being passed and
// * return the string true if the parameter is a palindrome, (the string is the
// * same forward as it is backward) otherwise return the string false. For
// * example: "racecar" is also "racecar" backwards. Punctuation and numbers will
// * not be part of the string.

var palindrome = function (s) {
  const transformed = s.replace(/[\W_]/g, "").toLowerCase();
  console.log(transformed);
  let left = 0;
  let right = transformed.length - 1;
  while (left < right) {
    if (transformed[left] !== transformed[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};
console.log(palindrome("race car"));
