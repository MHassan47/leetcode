// * Have the function meanMode(arr) take the array of numbers stored in arr and
//  * return 1 if the mode equals the mean, 0 if they don't equal each other (ie.
//  * [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
//  * The array will not be empty, will only contain positive integers, and will
//  * not contain more than one mode.

const meanMode = (arr) => {
  let map = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }
    count += arr[i];
  }
  let mean = count / arr.length;
  console.log(count, arr.length);
  for (let key in map) {
    let mostOccurrence = 0;

    mostOccurrence = Math.max(mostOccurrence, map[key]);
    // console.log(map[mean], mostOccurrence);
    if (map[mean] && map[mean] === mostOccurrence) {
      return 1;
    }
  }
  return 0;
};

console.log(meanMode([5, 3, 3, 3, 1]));
