// 创建Symbol类型的值
let id = Symbol("id");

// Symbol是唯一的，即是我们创建了具有相同描述的Symbol，他们也是不同的。
// 描述只是一个标签，不影响别的东西。
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);


console.log('id :>> ', id);
console.log('id :>> ', id.toString());
console.log('id :>> ', id.description);


// 对象中的Symbol类型
let user = {
  name: "John"
}

user[id] = 1;
console.log('user_id :>> ', user[id]);
// 相当于
// let user = {
//   name: "John",
//   [id]: 1
// }

// Symbol具有隐藏属性，在for循环中不会遍历到
for (const key in user) {
  if (Object.hasOwnProperty.call(user, key)) {
    const element = user[key];
    console.log('element :>> ', element);
  }
}

// 克隆会克隆全部，包括Symbol类型
let clone = Object.assign({}, user);
console.log('clone_id :>> ', clone[id]);
// Object.keys也会忽略Symbol类型
console.log('cloneUser :>> ', Object.keys(clone));


// 从全局注册表中读取
let id_global = Symbol.for("id"); // 如果该 symbol 不存在，则创建它

// 通过 symbol 获取 name
console.log(Symbol.keyFor(id_global)); // id