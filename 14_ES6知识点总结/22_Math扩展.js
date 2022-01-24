console.log(Math.cbrt(8));

// 在没有cbrt的环境中可以用以下方式代替 立方根
Math.cbrt = Math.cbrt || function (x) {
  let y = Math.pow(Math.abs(x), 1 / 3);
  return x < 0 ? -y : y;
}

// 判断是正数还是负数，如果是正数则返回1 如果是负数则返回-1 如果是0则返回0
// 如果是NaN则返回NaN
console.log(Math.sign(0));
console.log(Math.sign(5));
console.log(Math.sign(-4));
console.log(Math.sign(NaN));

// 在没有sign的环境中可以用以下方式代替
Math.sign = Math.sign || function (x) {
  if (x === 0 || x === NaN) {
    return x;
  }
  return x > 0 ? 1 : -1;
}

// 去除小数部分
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.9));

// 没有trunc的环境可以用以下方法代替
Math.trunc = Math.trunc || function (x) {
  return x > 0 ? Math.ceil(x) : Math.floor(x);
}




