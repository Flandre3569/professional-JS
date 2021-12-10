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
let activeReactiveFn = null;
function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

const obj = {
  name: 'mx', // depend对象
  age: 18  // depend对象
}

const targetMap = new WeakMap();
function getDepend(target, key) {
  // 根据target对象获取map的过程
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }

  // 根据key获取depend对象
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }

  return depend;
}

// 监听对象属性变化
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // 根据target和key获取正确的depend
    const depend = getDepend(target, key);
    // 给depend对象中添加响应函数
    depend.addDepend(activeReactiveFn);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    const depend = getDepend(target, key);
    return depend.notify();
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