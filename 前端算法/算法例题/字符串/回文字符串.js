// 判断字符串是否回文
// 该题的主要思想就是利用字符串反转
function isPalindromePlan1(str) {
  const reverseStr = str.split('').reverse().join('');
  return reverseStr === str;
}

console.log('isPalindrome :>> ', isPalindromePlan1("yessey"));

// 该题还可以使用对应
function isPalindromePlan2(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log('isPalindrome :>> ', isPalindromePlan2("testtse"));