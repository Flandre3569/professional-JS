const obj = {
  name: "mx",
  age: 18,
  friend: {
    name: "zhangsan",
    age: 19
  }
}

// 直接存储的时候，对象会被转化为字符串，而对象直接转字符串会转化为[Object Object]
// localStorage.setItem("obj", obj)

// 因此进行存储的时候需要转化为json格式，序列化
const objString = JSON.stringify(obj);
localStorage.setItem("obj", objString);

// 从localStorage中获取
const jsonString = localStorage.getItem("obj");

// 将json格式的字符串再转化为对象格式
const info = JSON.parse(jsonString);

console.log(info);