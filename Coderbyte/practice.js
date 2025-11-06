const fs = require("fs");

const parseAddressFile = (path) => {
  //   Final formatted result will be stored in this result array
  const result = [];

  //   Text file red using readFileSync
  const addressData = fs.readFileSync(path, "utf8");

  //   Splits all addresses into individual addresses separated by empty lines
  const formattedAddressData = addressData.trim().split(/\n\s*\n{2,}/); // IMPROVED REGEX

  //   Determines number of lines in each address
  for (let address of formattedAddressData) {
    const addressLines = address.trim().split("\n");
    if (addressLines.length < 2 || addressLines.length > 3) {
      throw new Error(`Incorrect address formatting found at: ${address}`);
    }
    //     Determine the address components from address lines
    let address1 = addressLines[0].trim();
    //     address2 will be null if address only contains 2 lines, but will have a value of middle line if address contains 3 lines
    let address2 = addressLines.length === 3 ? addressLines[1].trim() : null;
    //     Assign variables to city-state-zip splits
    let city_StateZip = addressLines[addressLines.length - 1].split(", ");
    let state_Zip = city_StateZip[1].split(" ");
    let [city, state, zip] = [city_StateZip[0], state_Zip[0], state_Zip[1]];

    result.push({
      address1,
      address2,
      city: city.trim(),
      state: state.trim(),
      zip: zip.trim(),
    });
  }

  return result;
};

module.exports = parseAddressFile;

function checkWord(board, word) {
  //   creates boggle board matrix
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (word[0] === board[i][j]) {
        //         variable that will temproarily store visited positions in memory
        const visited = new Set();
        //         if dfs helper function return true the word is found, the checkWord function also returns true
        if (helper(board, word, i, j, 0, visited) === true) {
          return true;
        }
      }
    }
  }
  return false;
}

// helper dfs function
const helper = (board, word, i, j, position, visited) => {
  //   directions of movement (verticle, horizontal, diagonal)
  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ];
  console.log(position);
  //   base case - if the entire word is traversed
  if (position === word.length) {
    return true;
  }
  //   reject if out of bounds, letter doesnt match, letter already visited
  if (
    j < 0 ||
    i < 0 ||
    j >= board[0].length ||
    i >= board.length ||
    board[i][j] !== word[position] ||
    visited.has(`${i},${j}`)
  ) {
    return false;
  }

  //  adds current position to prevent backtracking
  visited.add(`${i},${j}`);
  console.log(visited);

  //   dfs occurs in for loop, traverses every direction
  for (let [x, y] of directions) {
    if (helper(board, word, i + x, j + y, position + 1, visited)) {
      //   console.log(position);
      return true;
    }
  }

  //   removes position from visited status
  visited.delete(`${i},${j}`);

  return false;
};

var testBoard = [
  ["E", "A", "R", "A"],
  ["N", "L", "E", "C"],
  ["I", "A", "I", "S"],
  ["B", "Y", "O", "R"],
];

console.log(checkWord(testBoard, "BAILER"));
