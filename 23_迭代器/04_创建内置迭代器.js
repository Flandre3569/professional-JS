const names = ["nasd", "asd", "lku"];

const iterator = names[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


for (const item of names) {
  console.log(item);
}


// Map Set都是可迭代对象