// const isPalindrome = function (s) {
//   const transformed = s.replace(/[\W_]/g, "").toLowerCase();
//   console.log(transformed);
//   let left = 0;
//   let right = transformed.length - 1;
//   while (left < right) {
//     if (transformed[left] === transformed[right]) {
//       left++;
//       right--;
//     } else return false;
//   }
//   return true;
// };

// console.log(isPalindrome("ab_a"));

const maxProfit = function (prices) {
  let max = 0;
  let left = 0;
  let right = 1;
  for (let i = 1; i < prices.length; i++) {
    if (right < prices.length) {
      let possible = prices[right] - prices[left];
      console.log(possible);
      max = Math.max(max, possible);
      if (prices[left] > prices[right]) {
        left = right;
      } else {
        right++;
      }
    }
  }
  return max;
};
console.log(maxProfit([2, 1, 4]));
