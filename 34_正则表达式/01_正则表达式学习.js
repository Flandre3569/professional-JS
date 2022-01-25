// // 用普通的方法匹配字符串

// // 取出字符串中所有的数字，组成数组
// let str = 'sadeaff3w1231asdaw123asd1';

// let temp = '';
// let arr = [];
// for (let i = 0; i < str.length; i++){
//   if (!isNaN(str[i])) {
//     temp += str[i];
//   } else {
//     if(temp !== '')
//       arr.push(parseInt(temp));
//     temp = '';
//   }
// }
// if (temp !== '')
// arr.push(parseInt(temp));

// console.log(arr);

// // 用正则表达式的方法完成数字筛选
// // 字面量创建
// let reg = /\d+/g;
// let arr2 = str.match(reg);
// console.log(arr2);

// // 构造函数创建,这种方式是可以使用变量进行搜索的
// let reg2 = new RegExp("\\d+", "g");
// let arr3 = str.match(reg2);
// console.log(arr3);

// // 正则下的方法 1.test 2.exec
// let sstr = '112asd123dsd324';
// // 检测是否搜索成功
// let reg3 = /\d+/g;
// console.log(reg3.test(sstr));
// let reg4 = /sss/g;
// console.log(reg4.test(sstr));

// // exec是与正则匹配的lastIndex有关
// // 正则的lastIndex与任何正则的匹配都有关，不一定必须是exec匹配
// console.log(reg3.exec(sstr));
// console.log(reg3.lastIndex);
// console.log(reg3.exec(sstr));

// // 字符串方法 1.split; 2.search; 3.match; 4.replace;
// let ssstr = 'ashi1231asda123';
// let arr4 = ssstr.split(/\d+/);
// console.log(arr4);

// // search方法：返回查找信息的索引值，如果没有查到的话，返回-1
// let str = "abcdefghijkl";
// let reg = /e/;
// const res = str.search(reg);
// console.log(res);

// // match：字符串匹配
// let str = "asdas123asd31sd";
// let reg = /\d+/;
// console.log(str.match(reg));


// replace：替换
let str = "ashai123ashi1231";
let reg = /\d/g;
console.log(str.replace(reg, '*'));
// 也可以用回调函数
const res = str.replace(reg, (arg) => {
  console.log(arg);
  return '*';
})
console.log(res);