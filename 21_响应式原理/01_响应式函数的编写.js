const reactiveFn = []

const obj = {
  name: 'mx',
  age: 18
}

function WatchFN(fn) {
  reactiveFn.push(fn);
}

WatchFN(function fun1() {
  console.log(obj.name);
  obj.name = 'kobe';
  console.log(obj.age);
})

WatchFN(function fun2() {
  console.log(obj.name);
  console.log(obj.age);
  obj.age = 20;
  console.log(obj.age);
})

reactiveFn.forEach(fn => {
  fn();
})

