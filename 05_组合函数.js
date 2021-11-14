function double(count) {
  return count * 2;
}

function square(count) {
  return count ** 2;
}

var count = 10;

// 组合函数是javascript编程中的一种技巧
// 将两个需要分别执行的函数组合在一起。
function composeFn(foo1, foo2) {
  return function () {
    return foo2(foo1(count));
  }
}

var newFn = composeFn(double, square);
console.log(newFn(10));