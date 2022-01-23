const JSONString = '{"name": "mx","age": 18,"friend": {"name": "zhangsan","age": 19}}';

// 直接转化
const info = JSON.parse(JSONString);
console.log(info);

// 传入回调函数
const info2 = JSON.parse(JSONString, (key, value) => {
  if (key === "age") {
    return value - 1;
  }
  return value;
})

console.log(info2);