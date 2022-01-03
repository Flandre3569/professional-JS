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


// race方法,获得第一个获取的promise内容
Promise.race([p1, p2, p3]).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})