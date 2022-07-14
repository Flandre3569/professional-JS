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