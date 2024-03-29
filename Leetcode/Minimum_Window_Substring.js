// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

var minWindow = function (s, t) {
  var map = {};
  var sLen = s.length;
  var tLen = t.length;
  var count = tLen;
  var min = Number.MAX_SAFE_INTEGER;
  var head = 0;
  var left = 0;
  var right = 0;
  let res = "";

  if (!sLen || !tLen) return res;

  for (var i = 0; i < tLen; i++) {
    if (map[t[i]] === undefined) {
      map[t[i]] = 1;
    } else {
      map[t[i]]++;
    }
  }

  while (right < sLen) {
    if (map[s[right]] !== undefined) {
      if (map[s[right]] > 0) count--;
      map[s[right]]--;
    }

    right++;

    while (count === 0) {
      if (right - left < min) {
        min = right - left;
        res.slice(left, min);
      }

      if (map[s[left]] !== undefined) {
        if (map[s[left]] === 0) count++;
        map[s[left]]++;
      }

      left++;
    }
  }

  return res;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
