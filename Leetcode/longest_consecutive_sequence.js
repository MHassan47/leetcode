/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//   let longestStreak = 0;
//   let currentStreak = 0;
//   nums.sort((a, b) => a - b);
//   let newNums = [...new Set(nums)];
//   console.log(newNums);
//   let left = 0;
//   for (let right = 0; right < nums.length; right++) {
//     if (right < 1 || newNums[right] + 1 === newNums[right + 1]) {
//       currentStreak = right - left + 1;
//     } else if (nums.length === 1) {
//       currentStreak = 1;
//     } else {
//       left = right;
//       currentStreak = 0;
//     }
//     longestStreak = Math.max(longestStreak, currentStreak);
//   }
//   return longestStreak;
// };

var longestConsecutive = function (nums) {
    let longestStreak = 1;
    let currentStreak = 1;
    nums.sort((a, b) => a - b);
    nums = [...new Set(nums)];
   if(nums.length < 1) {
          return 0
        }
    for (let i = 0; i < nums.length; i++) {
       
      if (nums[i - 1] + 1 === nums[i]) {
        currentStreak++;
      } else {
        currentStreak = 1;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    
    }
    return longestStreak;
  };
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
