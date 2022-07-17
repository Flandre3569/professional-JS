// 因为只有 a b 两种字符，所以任何组合最多也只需要删除两次即可
function validPalindrome(str) {
  // 保存长度
  const len = str.length;
  let res = 1;

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

  // 判断删除元素后是否形成最后的回文

  // 左指针跳过当前元素
  if (isPalindrome(i + 1, j)) {
    res += 1;
    return res;
  }
  // 右指针跳过当前元素
  if (isPalindrome(i, j - 1)) {
    res += 1;
    return res;
  }

  return res;
}

const res = validPalindrome("abaa");
console.log('res :>> ', res);