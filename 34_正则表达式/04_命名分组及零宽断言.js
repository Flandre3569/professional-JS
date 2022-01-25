// 命名分组
// const str = '2020-01-06';
// let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// const res = str.match(reg);
// console.log(res);

// 零宽断言
// 正向零宽断言
// const str = 'iphone3iphone4iphone5iphonenumber';
// 正向的肯定
// let reg = /iphone(?=\d)/g;
// 正向的否定
// let reg = /iphone(?!\d)/g;
// const res = str.replace(reg, '苹果');
// console.log(res);

// 负向零宽断言
const str = '10px20px30pxipx';
// 负向的肯定
// let reg = /(?<=\d+)px/g;
// 负向的否定
let reg = /(?<!\d+)px/g;
const res = str.replace(reg, "像素");
console.log(res);