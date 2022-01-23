const obj = {
  name: "mx",
  age: 18,
  friend: {
    name: "zhangsan",
    age: 19
  },
  // foo() {
  //   console.log('nihao');
  // }
}

// 引用赋值
const info = obj;
info.name = "zhangsan";
console.log(info);
console.log(obj);

// 浅拷贝 -- 方法 1
const info2 = { ...obj };
info2.name = "lisi";
info2.friend.name = "wangwu";
console.log(info2);
console.log(obj);

// 浅拷贝 -- 方法 2
const info3 = Object.assign({}, obj);
info3.age = 100;
info2.friend.name = "xiaoming";
console.log(info3);
console.log(obj);

// 使用json序列化实现深拷贝
// 但是这种方法不会处理函数，如果对象有函数，会直接删除
const jsonString = JSON.stringify(obj);
const info4 = JSON.parse(jsonString);
info4.friend.name = "小红";
console.log(info4);
console.log(obj);

