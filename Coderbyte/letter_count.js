// * Have the function letterCountI(str) take the str parameter being passed and
//  * return the first word with the greatest number of repeated letters. For
//  * example: "Today, is the greatest day ever!" should return greatest because it
//  * has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
//  * are no words with repeating letters return -1. Words will be separated by
//  * spaces.

// map that holds repeated letters
// loop over string

function letterCount(str) {
  let solution = "";
  let largestCount = 0;
  str = str.replace(/[^\w\s]/g, "").split(" ");

  for (let i = 0; i < str.length; i++) {
    let map = {};
    let count = 0;
    for (let j = 0; j < str[i].length; j++) {
      if (map[str[i][j]] === 1) {
        count++;
      }
      if (map[str[i][j]] === undefined) {
        map[str[i][j]] = 1;
      }

      if (count > largestCount) {
        largestCount = count;

        solution = str[i];
      }
    }
  }
  return solution ? solution : -1;
}

console.log(letterCount("Today, is the greatesttttt day ever mississippi!"));
