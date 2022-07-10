// obj[Symbol.toPrimitive] = function (hint) {
// 这里是将此对象转换为原始值的代码
// 它必须返回一个原始值
// hint = "string"、"number" 或 "default" 中的一个
// }

// 实现例子
let user = {
  name: "John",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    console.log('hint :>> ', hint);
    return hint == "string" ? `name: ${this.name}` : this.money
  }
};

console.log(user);
console.log(+user);
console.log(user + 500);

let user2 = {
  name: "John",
  money: 1000,

  // 对于 hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // 对于 hint="number" 或 "default"
  valueOf() {
    return this.money;
  }

};

console.log(user2); // toString -> {name: "John"}
console.log(+user2); // valueOf -> 1000
console.log(user2 + 500); // valueOf -> 1500



// 题目实战
// 如何让a == 1 && a == 2 && a == 3 为true
var a = { value: 0 };
a[Symbol.toPrimitive] = function (hint) {
  console.log(hint); // default
  return this.value += 1;
}
console.log(a == 1 && a == 2 && a == 3); // true


var a = { value: 0 };
a.valueOf = function () {
  return this.value += 1;
};
console.log(a == 1 && a == 2 && a == 3); // true
