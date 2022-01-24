let s = 'hello world';

console.log(s.startsWith('hell'));
console.log(s.endsWith('ld'));
console.log(s.includes('lo'));

let s2 = 'hello world';

console.log(s2.startsWith('hell', 4));
// endsWith第二个参数代表前n个位置的字符
// 其余两个的第二个参数代表从n位置开始检索
console.log(s2.endsWith('lo',5));
console.log(s2.includes('lo',4));
