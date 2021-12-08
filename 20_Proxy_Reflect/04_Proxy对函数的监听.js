function foo() {

}

const fooProxy = new Proxy(foo, {
  apply: function (target, thisArg, argArray) {
    console.log(`监听到foo被apply调用了`);
    return target.apply(thisArg, argArray);
  },
  construct: function (target, argArray, newTarget) {
    console.log(`监听到foo被new调用了`);
    return new target(...argArray);
  }
})

fooProxy.apply({}, ["abc", "cba"]);
new fooProxy(["asd","dsa"])