const set = new Set();

set.add(10);
set.add(20);
set.add(30);
set.add(10); // 重复，直接舍弃

// 对于对象
set.add({});
set.add({});// 分配了一个新的内存块、和上一个对象不是一个对象，所以不会被舍弃

const obj = {};
set.add(obj);
set.add(obj); // 重复，直接舍弃

console.log(set);

// 数组去重
const arr = [10, 20, 20, 30, 40, 40];
// const newArr = [];
// for (const item of arr) {
//   if (newArr.indexOf(item) === -1) {
//     newArr.push(item);
//   }
// }
// console.log(newArr);


// 使用Set实现去重
const arrSet = new Set(arr);
console.log(arrSet);
// const newArr = Array.from(arrSet);
const newArr = [...arrSet]; // Set也支持展开运算符
console.log(newArr);