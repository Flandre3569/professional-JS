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

// 监听对象属性变化
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    depend.notify();
  }
})


watchFn(function () {
  const newName = objProxy.name;
  console.log("hello ",newName);
  console.log("hello world");
  console.log(objProxy.name);
})

watchFn(function () {
  console.log(objProxy.age, 'demo function -----');
})

objProxy.name = 'kobe';