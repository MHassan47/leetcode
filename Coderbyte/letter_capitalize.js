/*Using the JavaScript language, have the function LetterCapitalize(str) take the     
str parameter being passed and capitalize the first letter of each word. Words      *
 will be separated by only one space.  */

const letterCapitalize = (str) => {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      str[i] = str[i].toUpperCase();
    }
    if (str[i] === " ") {
      str[i + 1] = str[i + 1].toUpperCase();
      console.log(i);
    }
  }
  return str.join("");
};

console.log(letterCapitalize("hello world i am jo"));
