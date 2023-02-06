/*
Using the JavaScript language, have the function CoinDeterminer(num) take the input, 
which will be an integer ranging from 1 to 250, and return an integer output that will 
specify the least number of coins, that when added, equal the input integer. Coins are 
based on a system as follows: there are coins representing the integers 1, 5, 7, 9, 
and 11. So for example: if num is 16, then the output should be 2 because you can achieve 
the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 because you 
can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins. 
Input = 6Output = 2
Input = 16Output = 2
*/

// - create an array of all possible coins
// - loop over the coin values to accumlate to target num
// - sliding window

const coinDeterminer = (num) => {
  const coins = [1, 5, 7, 9, 11];
  let leastNumber = 0;
  let currentNumber = 0;
  let 
  for (let i = 0; i < coins.length; i++) {
    let currentCount = 0;
    currentCount += coins[i];
    if (currentCount < num) {
      currentNumber++;
    
    }
    leastNumber = Math.max(leastNumber, currentNumber);
  }
  return leastNumber;
};

console.log(coinDeterminer(16));
