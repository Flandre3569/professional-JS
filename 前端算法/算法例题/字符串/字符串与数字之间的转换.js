const myAtoi = function (str) {
  const reg = /\s*([-\+]?[0-9]*).*/
  const groups = str.match(reg);

  // 计算最大值
  const max_value = Math.pow(2, 31) - 1;
  // 计算最小值
  const min_value = -max_value - 1;
  // target转换出来的数字
  let targetNum = 0;

  // 匹配成功
  if (groups) {
    // 尝试转化捕获到的结构
    targetNum = +groups[1];

    // 只有一个 + 的情况
    if (isNaN(targetNum)) {
      targetNum = 0;
    }
  }

  if (targetNum > max_value) {
    return max_value;
  } else if (targetNum < min_value) {
    return min_value;
  }

  return targetNum;
}

console.log(myAtoi("42"));
console.log(myAtoi("-42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 876"));
console.log(myAtoi("-91283472332"));
