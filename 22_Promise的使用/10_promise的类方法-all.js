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
  }, 3000);
})

// 需求: 所有的promise都变成fulfilled，再拿到结果
// 意外: 在拿到所有结果之前，有一个promise变成了rejected，那么整个promise是rejected
Promise.all([p1, p2, p3, "aaaa"]).then(res => {
  console.log(res);
}).catch(err => {
  console.log("err:", err);
})
