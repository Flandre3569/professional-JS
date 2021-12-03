const obj = { name: 'mx' };
// WeakMap和map的区别
const map = new Map();
map.set(obj, "aaa"); // 强引用

const weakMap = new WeakMap();
weakMap.set(obj, "bbb"); // 弱引用

// weakMap不能使用基本变量作为key
//weakMap.set(1, 'aaa'); // 直接报错



