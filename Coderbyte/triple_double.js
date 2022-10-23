/*Using the JavaScript language, have the function TripleDouble(num1,num2)
take both parameters being passed, and return 1 if there is a straight triple
of a number at any place in num1 and also a straight double of the same number in num2. 
For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because
in the first parameter you have the straight triple 999 and you have a straight double,
99, of the same number in the second parameter. If this isn't the case, return 0.*/

const tripleDouble = (num1, num2) => {
  num1 = num1.toString().split("");
  num2 = num2.toString().split("");
  let map = {};

  for (let i = 0; i < num1.length; i++) {
    if (map[num1[i]] === undefined) {
      map[num1[i]] = 1;
    } else {
      map[num1[i]] += 1;
    }
  }

  for (let i = 0; i < num2.length; i++) {
    if (num2[i] === num2[i + 1] && map[num2[i]] === 3) {
      return 1;
    }
  }
  return 0;
};

console.log(tripleDouble(451999277, 41177722899));
