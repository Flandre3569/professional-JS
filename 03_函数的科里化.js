// function addNum5(count) {
//   return function (num) {
//     return count + num;
//   }
// }

// const add = addNum5(5);
// console.log(add(10));
// console.log(add(20));
// console.log(add(30));
// console.log(add(40));


// 函数的复用2
var log = date => type => message => {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`);
}

var nowLog = log(new Date());
nowLog('DEBUG')('查找到懒加载的Bug');
nowLog('DEFAULT')('传入默认值');

