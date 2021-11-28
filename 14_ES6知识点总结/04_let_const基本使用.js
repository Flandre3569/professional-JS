// 对于效果来说，let和const与var一样是直接声明一个变量的，本身并没有太大的区别
var message = 'hello world';
let address = '北京';
const names = ['zhangsan', 'lisi', 'wangwu'];

console.log(message);
console.log(address);
console.log(names);

// const声明的变量是不可以修改的。
const foo = {
  name: 'wangwu'
}

// 以下重新赋值会报错
// foo = {}

// 但是内部的属性进行修改是不会报错的
foo.name = '王五';
console.log(foo.name);


// 关于块级作用域
{ 
  var hello = '123';
}
// hello是可以在外面访问到的，因为var不会和{}组合形成块级作用域
console.log(hello);

{
  let world = '456';
}
// 以下代码报错，证明let在{}中声明的变量在全局中是不可以访问的，也就是形成了块级作用域
// console.log(world); 

// ES5中,for循环在以下代码中是可以在全局中取到的。
for (var i = 0; i < 10; i++) {
  
}
console.log(i);

for (let j = 0; j < 10; j++){
  
}
// 以下代码报错
// console.log(j);

// if/switch/for 的代码块都是块级作用域，需要配合let/const使用

// let和const的作用域提升问题
// 以下代码报错，因为let和const本身虽然在定义变量时，变量会先进行定义，但是在运行到那一行代码之前，
// 定义的变量是不可访问的，也就是在表现形式上,let和const是不存在作用域提升的。
// console.log(ccc,ddd);
// let ccc = 'ccc';
// const ddd = 'ddd'
