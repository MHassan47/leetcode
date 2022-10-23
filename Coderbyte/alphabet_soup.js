/*  Have the function AlphabetSoup(str) take the str string parameter being passed      *
 *  and return the string with the letters in alphabetical order                        *
 *  (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be       *
 *  included in the string. */

/* pseudocode
- loop over the string 
- use two pointers to traverse the loop
*/

const alphabetSoup = (str) => {
  const newStr = str.split("").sort().join("");
  return newStr;
};

console.log(alphabetSoup("hello"));
