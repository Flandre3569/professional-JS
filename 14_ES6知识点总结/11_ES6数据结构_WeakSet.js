const weakSet = new WeakSet();
// weakSet.add(10); // 直接报错

const obj = {
  name: 'mx'
}

// 对obj的引用是弱引用
weakSet.add(obj);

// 如果将obj销毁的话，weakSet对于obj的弱引用不会影响GC对其进行垃圾回收
obj = null;