
// 在new一个promise的时候
function returnData() {
  return new Promise((resolve,reject) => {
    // resolve(); // 成功时使用
    reject(); // 失败时使用
  })
}

const fooPromise = returnData();

// 使用then方法， 会在Promise执行resolve函数的时候，被回调
fooPromise.then(() => {

})

// 使用catch方法，会在Promise执行reject函数的时候，被回调
fooPromise.catch(() => {

})