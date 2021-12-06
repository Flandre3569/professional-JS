// ES11知识点总结
const maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt);

// 大于maxInt的数字，js本身就不能保证正确性了。
// 所以成为最大安全数字
console.log(maxInt + 1);
console.log(maxInt + 2);

// 最后的n不能省略
const bigInt = 900719925474099100n;
console.log(bigInt);

// 大数字的运算
const num = 100;
console.log(bigInt+BigInt(num));