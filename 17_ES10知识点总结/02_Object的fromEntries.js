// 把entries类型的数组转换为对象类型
const obj = {
  name: 'mx',
  age: 18
}

const newObj = Object.entries(obj);
console.log(newObj);
// 使用fromEntries进行转回
const newNewObj = Object.fromEntries(newObj);
console.log(newNewObj);

// fromEntries的使用场景
const queryMessage = 'name=mx&age=18&sex=man';
const queryParams = new URLSearchParams(queryMessage);
console.log(queryParams);
const paramObj = Object.fromEntries(queryParams);
console.log(paramObj);

console.log(Object.values(paramObj));