const weakSet = new WeakSet();
// weakSet.add(10); // 直接报错

const obj = {
  name: 'mx'
}

// 对obj的引用是弱引用
weakSet.add(obj);

// 如果将obj销毁的话，weakSet对于obj的弱引用不会影响GC对其进行垃圾回收
// obj = null;

// WeakSet使用场景:不能通过非构造方法的方式调用对象的方法
const personSet = new WeakSet();
class Person{
  constructor() {
    personSet.add(this);
  }
  running() {
    if (!personSet.has(this)) {
      throw new Error("不能通过非构造方法的方式调用runnint...")
    }
    console.log(`running...`,this);
  }
}

const p = new Person();
p.running();
// p.running.call({name: 'mx'});