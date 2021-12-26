// 转换成promise对象
function foo() {
  const obj = {
    name: 'mx'
  };
  return new Promise((resolve) => {
    resolve(obj);
  })
}


foo().then((res) => {
  console.log("res:", res);
})

// promise给我们提供了一个可以直接转变的方法
const promise = Promise.resolve({ name: 'mx' });

// 相当于以下形式
const promise2 = new Promise((resolve, reject) => {
  resolve({name: 'mx'})
})

promise.then((res) => {
  console.log("res:", res);
})

promise2.then((res) => {
  console.log("res:", res);
})