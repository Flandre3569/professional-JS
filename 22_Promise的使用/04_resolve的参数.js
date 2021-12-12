const newPromise = new Promise((resolve, reject) => {
  resolve('aaaa'); 
})

new Promise((resolve, reject) => {
  resolve(newPromise); // 这个Promise的状态会由newPromise的状态来决定
}).then((res) => {
  console.log('res:', res);
}, err => {
    console.log('err:', err);
})


// 传入一个实现了then的对象的时候，Promise的状态也会根据对象的thenable状态决定
new Promise((resolve, reject) => {
  const obj = {
    then: function (resolve, reject) {
      resolve('aaa')
    }
  }
  resolve(obj);
}).then((res) => {
  console.log('res:', res);
}, err => {
    console.log('err:', err);
})