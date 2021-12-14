// Promise有哪些对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype));


const promise = new Promise((resolve, reject) => {
  resolve('hahah');
})


// 同一个Promise可以被多次调用
// 当resolve被调用的时候，所有的then方法都会收到返回值
promise.then((res) => {
  console.log('res1:', res);
})

promise.then((res) => {
  console.log('res2:', res);
})

promise.then((res) => {
  console.log('res3:', res);
})

// then方法传入的回调函数是可以有返回值的
// then如果返回值是一个普通值（数字、字符串或者对象等），那么返回值会作为一个新的Promise的resolve值进行调用

promise.then((res) => {
  return 'aaaa';
}).then((res) => {
  console.log(res);
})


// 如果返回的是一个Promise或者实现了then方法的对象，那么会发生状态移交
promise.then((res) => {
  return new Promise((resolve, reject) => {
    resolve('bbbb'); 
  })
}).then((res) => {
  console.log(res);
})

promise.then((res) => {
  return {
    then: function (resolve, reject) {
      resolve('cccc');
    }
  }
}).then((res) => {
  console.log(res);
})
