// #  Using the Python language, have the function StringScramble(str1,str2) take both parameters being passed and return
// # the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false.
// # For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will
// # not be entered with the parameters.

const stringScramble = (str1, str2) => {
  let map = {};

  for (let k = 0; k < str1.length; k++) {
    if (map[str1[k]] === undefined) {
      map[str1[k]] = 1;
    } else {
      map[str1[k]] += 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (map[str2[i]] === undefined) return false;
  }
  return true;
};

console.log(stringScramble("rkqodlw", "qorw"));
