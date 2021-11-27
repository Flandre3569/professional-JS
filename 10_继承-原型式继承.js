var obj = {
  name: "why",
  age: 18
}

// 原型式继承函数
function createObject(o) {
  var newObj = {};
  Object.setPrototypeOf(newObj, o);
  return newObj;
}

var info = createObject(obj);
console.log(info);
console.log(info.__proto__);