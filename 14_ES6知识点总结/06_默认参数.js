// ES5以及之前给参数默认值
// 这种写法是有bug的，当传入0或者""的时候，默认是传入false，所以默认值就是后面的字符串了。
function foo(m, n) {
  m = m || "aaa";
  n = n || "bbb";
  console.log(m,n);
}

foo();
foo(0, "");

// ES6传入默认值的方式
function fun(m = "aaa", n = "bbb") {
  console.log(m,n);
}

fun();
fun(0, "");


// 对象参数的默认值和解构
function Ofoo({ name, age } = { name: 'mx', age: 18 }) {
  console.log(name,age);
}
Ofoo();

// 剩余参数
function restF(a, b, ...c) {
  console.log(a,b,c);
}

restF(1, 2, 3, 4, 5, 6);


