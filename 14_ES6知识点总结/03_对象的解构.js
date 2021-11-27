var obj = {
  name: 'mx',
  age: 18,
  height: 1.88
}

// 对对象进行解构
var { name, age, height } = obj;
console.log(name, age, height);

// 对解构出来的属性进行重命名
var { name: newName } = obj;
console.log(newName);

// 设置默认值
var { address = '北京市' } = obj;
console.log(address);

// 直接使用解构值
function bar({ name, age }) {
  console.log(name,age);
}
bar(obj);