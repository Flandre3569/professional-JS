const obj = {
  name: "mx",
  age: 18,
  friend: {
    name: "zhangsan",
    age: 19
  }
}

// 将上述对象转化为json格式
// 直接转化
const jsonString = JSON.stringify(obj);
console.log(jsonString);


// stringify的第二个参数replacer,局部转换,相当于过滤功能
const jsonString2 = JSON.stringify(obj, ["name", "age"]);
console.log(jsonString2);

// 传入回调函数
// 拦截功能
const jsonString3 = JSON.stringify(obj, (key, value) => {
  if (key === "age") {
    return value + 1;
  }
  return value;
})

console.log(jsonString3);

// 第三个参数：space
// 设定转化格式,最后的数字代表每次换行缩进两个空格
const jsonString4 = JSON.stringify(obj, null, 2);

console.log(jsonString4);

// 默认是采用空格，也可以自定义换行后缩进的内容
const jsonString5 = JSON.stringify(obj, null, "->");

console.log(jsonString5);

// 如果obj对象中含有toJSON方法，那么所有转化都会默认使用toJSON的返回值
const obj2 = {
  name: "zhangsan",
  age: 19,
  toJSON: function() {
    return "1234";
  }
}

const jsonString6 = JSON.stringify(obj2);
console.log(jsonString6);