var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

console.log(r1.exec(s));
console.log(r2.exec(s));

console.log(r1.exec(s));
console.log(r2.exec(s));