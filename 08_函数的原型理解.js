function foo() {

}

// var fun = new Foo();

// // 当我们new一个对象的时候，对象内部的prototype会被赋值为函数的prototype属性
// console.log(fun.__proto__ === Foo.prototype);

// 修改原型属性
foo.prototype = {
  name: 'zhangsan',
  age: 18,
  height: 1.88
}

var fun = new foo();
// 定义与原型中的constructor完全相同的新的constructor
Object.defineProperty(foo.prototype, 'constructor', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: foo
})

console.log(fun.name);