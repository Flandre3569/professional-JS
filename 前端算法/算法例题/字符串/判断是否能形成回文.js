function validPalindrome(str) {
  // 保存长度
  const len = str.length;

  // 双指针法
  let i = 0, j = len - 1;
  while (i < j && str[i] === str[j]) {
    i++;
    j--;
  }

  // 判断是否是回文数
  // st -> 头指针 start
  // ed -> 尾指针 end
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

  // 判断最后是否形成回文
  // 左指针跳过当前元素
  if (isPalindrome(i + 1, j)) {
    return true;
  }
  // 右指针跳过当前元素
  if (isPalindrome(i, j - 1)) {
    return true;
  }

  return false;
}

const res = validPalindrome("yesseey");
console.log('res :>> ', res);