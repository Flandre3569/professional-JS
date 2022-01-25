// 匹配模式
// g i m s u y

// g ---> 全局匹配
// const str = '123asd123asd';
// let reg = /\d+/g;
// let res = str.match(reg);
// console.log(res);

// i ---> 忽略大小写
// const str = 'SaSDsdasSD32341';
// let reg = /sas/i;
// const res = str.match(reg);
// console.log(res);

// m ---> 多行模式
// const str = `asbad
// asd
// gthf
// 123fg
// `;
// let reg = /^\w/gm;
// const res = str.replace(reg, '*');
// console.log(res);

// s ---> 让 '.' 去匹配换行符
// const str = `asd
// ag`;
// let reg = /^a.*g$/gs;
// const res = str.match(reg);
// console.log(res);

// u ---> 让正则匹配unicode编码
// const str = 'a';
// let reg = /\u{61}/gu;   // {}也可以配合\u表示unicode编码
// console.log(reg.test(str));

// y ---> 粘性模式
// 粘性模式匹配字符的时候必须是连续的，如果不是连续的，则返回null
const str = '1231asd123asda';
let reg = /\d/gy;
console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(reg.exec(str));
