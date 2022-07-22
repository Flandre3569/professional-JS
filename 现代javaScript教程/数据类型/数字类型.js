// let i = 0;
// // 此位置的判断条件永远不会成立
// // 因此循环不会停止
// while (i !== 10) {
//   i += 0.2;
// }

// console.log("over");

// 生成随机数
function random(min, max) {
  return min + Math.random() * (max - min);
}

// 生成随机整数 -- 简单但是错误的方法
// 这个函数能起作用，但是获得边缘值的概率是其他的两倍
function randomIntegerError(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

console.log(randomIntegerError(1, 3));

// 正确的方法
// 方法一
function randomInteger1(min, max) {
  // 现在范围是从  (min-0.5) 到 (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

console.log(randomInteger1(1, 3));

// 方法二
function randomInteger2(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInteger2(1, 3));