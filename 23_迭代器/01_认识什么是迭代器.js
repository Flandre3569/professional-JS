// 迭代器
const iterator = {
  next: function () {
    return {
      done: true,
      value: 123
    }
  }
}


// 数组
const names = ["123", "321", "213"];
// 以前访问的方式
// for (let i = 0; i < names.length; i++) {
  
// }

// 创建一个迭代器对象来访问数组
let index = 0;
const namesIterator = {
  next: function () {
    if (index < names.length) {
      return {done: false, value: names[index++]}
    } else {
      return {done: true, value: undefined}
    }
  }
}

console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());