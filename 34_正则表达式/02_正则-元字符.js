// 元字符：有特殊含义的非字母字符
/*
  1.字符相关;
  2.数量相关;
  3.位置相关;
  4.括号相关;
*/

// // 字符相关: \w \W \d \D \s \S .
// // \w :数字、字母、下划线
// let str = '~2123sdda';
// let reg = /\w+/g;
// console.log(reg.test(str));
// // \W :非数字、字母、下划线
// let STR = '2123sdda';
// let REG = /\W+/g;
// console.log(REG.test(STR));
// // \d和\D是匹配数字和非数字

// // \s:匹配空格 \S:匹配非空格
// let str = 'abc';
// let reg = /\s+/g;
// console.log(reg.test(str));

// let str = 'abc';
// let reg = /\S+/g;
// console.log(reg.test(str));

// // . :匹配非\n \r \u2028 \u2029   分别是：回车、换行、段结束符和行结束符
// let str = `a
// b`;
// let reg = /a.b/;
// console.log(reg.test(str));

// -------------------------------------------
// 2.数量相关
// {} ? + *

// let str = "abaaaada";
// // let reg = /ba{4}d/g;
// // let reg = /ba{2,4}d/g;
// let reg = /ba{1,}d/g;
// console.log(reg.test(str));

// ? ---> {0,1}  + ---> {1,}  * ---> {0,}
// let str = 'my name is fan mingxuan';
// let reg = /my\s+name/g;
// console.log(reg.test(str));

// // 默认是：贪婪匹配   按照最多的匹配
// let str = '123456789';
// // let reg = /\d{2,4}/g;
// // let res = str.match(reg);
// // console.log(res);

// // 惰性匹配，利用 ? 修改匹配模式的惰性
// let reg = /\d{2,4}?/g;
// const res = str.match(reg);
// console.log(res);

//---------------------------------------------------
// 3.位置相关
// ^ $ \b \B
// ^ ---> 字符开始的位置
// let str = 'abedef';
// let reg = /^\w/g;
// let res = str.replace(reg, '*');
// console.log(res);

// $ ---> 字符结尾的字符
// let str = 'abedef';
// let reg = /\w$/g;
// let res = str.replace(reg, '*');
// console.log(res);

// \b ---> 边界符 \B ---> 非边界
// 边界: 非\w的都是边界
// let str = 'this is a book';
// let reg = /\bis\b/g;
// let res = str.match(reg);
// console.log(res);

// let str = 'this is a book';
// let reg = /\B\w{2}\b/g;
// let res = str.match(reg);
// console.log(res);

//--------------------------------------------
// 4.括号相关
// () [] {}

// (): 分组、提取值、替换、反向引用

// 分组：
// let str = 'abababsajdow';
// let reg = /(ab){3}/g;
// console.log(reg.test(str));

// 提取值：
// let str = '2021-10-31';
// let reg = /(\d{4})-(\d{2})-(\d{2})/;
// console.log(str.match(reg));
// console.log(...str.match(reg));
// // 直接拿到三个值
// console.log(RegExp.$1);
// console.log(RegExp.$2);
// console.log(RegExp.$3);

// 替换:
// let str = '2021-10-31';
// let reg = /(\d{4})-(\d{2})-(\d{2})/;
// // const res = str.replace(reg, "$2/$3/$1");
// // console.log(res);
// // 回调函数实现替换:
// const res = str.replace(reg, (arg, year, month, day) => {
//   return `${month}/${day}/${year}`;
// })
// console.log(res);

// 反向引用:可以在使用相同匹配机制的时候保证前后匹配的是一样的。
// let className = 'news-container-nav';
// let className2 = 'news-container_nav';
// let reg = /\w{1,}(-|_)\w{1,}(\1)\w{1,}/;
// const res = className.match(reg);
// const res2 = className2.match(reg);
// console.log(res);
// console.log(res2);

// []: 字符集合

// 不使用[]的方式
// let str = 'My name is fan mingxuan';
// let reg = /ming(x|X)uan/g;
// const res = str.match(reg);
// console.log(res);
// 使用[]的方式(不用再加入 | 进行或操作了)
// let reg = /ming[Xx]uan/g;
// const res = str.match(reg);
// console.log(res);

// 匹配数字、字母
// const str = 'asdas1231asasd42asd';
// let reg = /[0-9]/g;
// let reg2 = /[a-z]/g;
// const res = str.match(reg);
// const res2 = str.match(reg2);
// console.log(res);
// console.log(res2);

// 注意在字符集合也就是[]中，^代表的不是以什么开头，而是取反
const str = '123';
let reg = /[^0-9]/g;
console.log(reg.test(str));

// 使用字符集和可以取代一些东西： \d ---> [0-9]  \w ---> [a-zA-Z0-9_] 等
