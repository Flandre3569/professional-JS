// 可迭代对象
const iterableOjb = {
  names: ["123", "321", "213"],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.names.length) {
          return {done: false, value: this.names[index++]}
        } else {
          return {done: true, value: undefined}
        }
      }
    }
  }
}

// const iterator = iterableOjb[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for...of的迭代机制是结束条件为done为true的时候就会停止遍历
for (const item of iterableOjb) {
  console.log(item);
}
