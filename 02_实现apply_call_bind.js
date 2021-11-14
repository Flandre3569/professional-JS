Function.prototype.mxCall = function () {
  var _fun = this;
  _fun();
}

function foo() {
  console.log('foo');
}
function sum() {
  console.log('sum');
}

foo.mxCall();
sum.mxCall();

// ES6-剩余参数
// function a(...nums) {
//   console.log(nums);
// }

// a(1, 2, 34, 5);

// 展开运算符
var names = ['123', 'abc', 'ad'];
console.log(...names);

