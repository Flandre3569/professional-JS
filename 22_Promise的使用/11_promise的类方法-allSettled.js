const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111);
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2222);
  }, 2000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3333);
  }, 1500);
})

// ES11出的新方法allSettled，可以记录promise的reject和resolve的状态返回值
// 跟存放的位置有关，而与运行的顺序无关
Promise.allSettled([p1, p2, p3]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})