// arr.splice 可以完成对数组添加、删除和插入

let arr = ["I", "study", "JavaScript"];
// 删除操作
arr.splice(1, 1);
console.log(arr);

// 删除并代替
let arr2 = ["I", "study", "JavaScript", "right", "now"];

arr2.splice(0, 3, "like", "js");
console.log(arr2);

// 插入元素
arr2.splice(2, 0, "very", "much");
console.log(arr2);

// 允许负向索引
let arr3 = [1, 2, 5];

// 从索引 -1（尾端前一位）
// 删除 0 个元素，
// 然后插入 3 和 4
arr.splice(-1, 0, 3, 4);

console.log(arr3); // 1,2,3,4,5

let arr4 = ["t", "e", "s", "t"];
console.log(arr4.slice(1, 3));
console.log(arr4.slice(0, 2));

// 寻找数组元素
console.log(arr.includes("I")); // 返回true或者false
console.log(arr.indexOf("I")); // 返回索引位置，如果不存在返回 -1
console.log(arr.lastIndexOf("I")); // 从右往左寻找，其他机制和indexOf一致


let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 1);

console.log(user.name); // John
console.log(users.findIndex(item => item.name === 'John'));
// console.log(users.findLastIndex(user => user.name === 'Mary'));

// 返回前两个用户的数组
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers);

// 返回新值而不是当前元素
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);
// 该函数一个接一个地应用于所有数组元素，并将其结果“搬运（carry on）”到下一个调用。

// 参数：
// accumulator —— 是上一个函数调用的结果，第一次等于 initial（如果提供了 initial 的话）。
// item —— 当前的数组元素。
// index —— 当前索引。
// arr —— 数组本身。

let array = [1, 2, 3, 4, 5];

let result = array.reduce((sum, current) => sum + current, 0);

console.log(result); // 15


let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let userList = [
  { age: 16 },
  { age: 20 },
  { age: 23 },
  { age: 30 }
];

// 找到 army.canJoin 返回 true 的 user
let soldiers = userList.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers);
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23