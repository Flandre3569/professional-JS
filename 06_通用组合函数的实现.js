function mxCompose(...fns) {
  var length = fns.length;
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError('Expected arguments are functions');
    }
  }
  function compose(...args) {
    var index = 0;
    var result = length ? fns[index].apply(this, args) : args;
    while (++index < length) {
      result = fns[index].call(this, result)
    }
    return result;
  }
  return compose;
}

//测试
function double(count) {
  return count * 2;
}

function square(count) {
  return count ** 2;
}

var newFn = mxCompose(double, square);
console.log((newFn(10)));