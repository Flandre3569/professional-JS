var name = 'mx';
var age = 18;

var obj = {
  // 属性简写
  name,
  age,

  // 函数简写
  bar() {
    console.log('get Bar');
  },

  // 计算属性名
  [name + 123]: '哈哈哈'
}

console.log(obj.name);
console.log(obj.bar());
console.log(obj);