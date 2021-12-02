// ES6中的Symbol
const s1 = Symbol();
const s2 = Symbol();

console.log(s1 === s2);

// 在对象中使用
const name = Symbol();
const obj = {
  [name]: 'mx',
  friend: {
    name: 'xc'
  }
}

// 获取时不能通过.语法获取
console.log(obj[name]);

// 直接定义在原型上
const s4 = Symbol();
Object.defineProperty(obj, s4, {
  writable: true,
  enumerable: true,
  configurable: true,
  value: 'cuba'
})

console.log(obj[s4]);

// 在ES10中，新建Symbol值时还可以传入描述
const s3 = Symbol("aaa");
console.log(s3.description);

// 使用Symbol作为key的属性名，在遍历Object.keys等中是获取不到Symbol的值的
console.log(Object.keys(obj)); // 只获取到了friend但是没有获取到Symbol的name

// 当想要遍历到时，有单独的方法
const sKeys = Object.getOwnPropertySymbols(obj);
for (const key of sKeys) {
  console.log(obj[key]);
}

// 创建相同的Symbol值
const sa = Symbol.for("aaa");
const sb = Symbol.for("aaa");
console.log(sa === sb);

// 获取Symbol的key值
const keys = Symbol.keyFor(sa);
console.log(keys);