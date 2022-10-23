/*# Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string
# using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character
# and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would
# return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. */

// - hashmap
// - loop all the elements
// - variable that holds the altered string

const runLength = (str) => {
  let newStr = "";
  let map = {};

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === undefined) {
      map[str[i]] = 1;
    } else {
      map[str[i]] += 1;
    }
  }

  for (const [key, value] of Object.entries(map)) {
    newStr += `${value}${key}`;
  }

  return newStr;
};

console.log(runLength("hello what is it"));
