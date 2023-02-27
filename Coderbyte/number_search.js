/*Using the JavaScript language, have the function NumberSearch(str) take the str parameter,
search for all the numbers in the string, add them together, then return that final number
divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" 
the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17
letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number,
so the answer is 2. Only single digit numbers separated by spaces will be used throughout 
the whole string (So this won't ever be the case: hello44444 world). Each string will also have at least one letter. */

const letterSearch = (str) => {
  let letters = /[a-zA-Z]/g;
  let numbers = /[0-9]/g;
  let lettersCount = 0;
  let numbersCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(letters)) {
      lettersCount++;
    }
    if (str[i].match(numbers)) {
      numbersCount += Number(str[i]);
    }
  }
  return Math.round(numbersCount / lettersCount);
};

// regular express only numbers
// regular expression only alphabets
// loop through
// track counter variable

// const numberSearch = (str) => {
//   let sumofNumbers = 0;
//   let sumofAlphabets = 0;
//   let numbers = /[0-9]/;
//   let alphabets = /[a-z]/gi;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(numbers)) {
//       sumofNumbers += Number(str[i]);
//       //   console.log(str[i]);
//     }
//     if (str[i].match(alphabets)) {
//       sumofAlphabets++;
//       console.log(str[i]);
//     }
//   }
//   return Math.round(sumofNumbers / sumofAlphabets);
// };

console.log(letterSearch("Hello6 9World 2, Nic8e D7ay"));
