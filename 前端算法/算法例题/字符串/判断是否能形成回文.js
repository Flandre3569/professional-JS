function validPalindrome(str) {
  // 保存长度
  const len = str.length;

  let i = 0, j = len - 1;
  while (i < j && str[i] === str[j]) {
    i++;
    j--;
  }

  function isPalindrome(st, ed) {
    while (st < ed) {
      if (str[st] !== str[ed]) {
        return false;
      }
      st++;
      ed--;
    }
    return true;
  }

  // 跳过左指针
  if (isPalindrome(i + 1, j)) {
    return true;
  }
  // 跳过右指针
  if (isPalindrome(i, j - 1)) {
    return true;
  }

  return false;
}

const res = validPalindrome("yesseey");
console.log('res :>> ', res);