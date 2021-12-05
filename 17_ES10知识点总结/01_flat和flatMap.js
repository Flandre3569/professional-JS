// 进行数组的降维
const nums = [10, 20, [[30, 12], [123, 43]], 43, [12, 32]];
const newNums = nums.flat();
console.log(newNums);

const newNums2 = nums.flat(2);
console.log(newNums2);

// flatMap的使用
const num2 = [10, 20, 30];
const newNums3 = num2.flatMap(item => {
  return item * 2;
})

console.log(newNums3);

const messages = ['hello world', 'hello fmx', 'my name is mx'];
const words = messages.flatMap(item => {
  return item.split(" ");
})

console.log(words);

