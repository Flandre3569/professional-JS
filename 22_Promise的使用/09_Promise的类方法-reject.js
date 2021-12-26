const promise = Promise.reject("reject message");

// 相当于
const promise2 = new Promise((resolve, reject) => {
  reject("reject message2");
})

promise.catch((res) => {
  console.log(res);
})