function mxCurrying(fn) {
  function curried(...args) {
    // 判断当前已经接收的参数的个数，和函数本身需要接收的参数的个数是否已经一致了
    // 1.当已经传入的参数大于等于需要的参数时，就执行函数
    if (args.length >= fn.length) {
      // fn(...args);
      // fn.call(this, ...args);
      // console.log(this);
      return fn.apply(this, args);
    } else {
      // 2.没有到达个数时，需要返回一个新的函数，继续来接收参数
      function curried2(...args2) {
        // 然后再进行检查
        return curried.apply(this, args.concat(args2));
      }
      return curried2;
    }
  }
  return curried;
}

// 测试
function add(num1, num2, num3) {
  return num1 + num2 + num3;
}

var addCurrying = mxCurrying(add);
console.log(addCurrying(10, 20, 30));
console.log(addCurrying(10)(20, 30));
console.log(addCurrying(10)(20)(30));

