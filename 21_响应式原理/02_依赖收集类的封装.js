// 收集依赖类
class Depend {
  constructor() {
    this.reactiveFns = [];
  }

  addDepend(reativeFn) {
    this.reactiveFns.push(reativeFn);
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn();
    })
  }
}

// 封装一个响应式的函数
const depend = new Depend();
function watchFn(fn) {
  depend.addDepend(fn);
}

const obj = {
  name: 'mx', // depend对象
  age: 18  // depend对象
}

watchFn(function () {
  const newName = obj.name;
  console.log("hello mx");
  console.log("hello world");
  console.log(obj.name);
})

watchFn(function () {
  console.log(obj.name, 'demo function -----');
})

obj.name = 'kobe';
depend.notify();