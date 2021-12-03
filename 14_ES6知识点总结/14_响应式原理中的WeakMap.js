const obj1 = {
  name: 'mx',
  age: 18
}

const obj2 = {
  name: 'zzh',
}

function obj1NameFun1() {
  console.log(`obj1NameFun1被执行`);
}
function obj1NameFun2() {
  console.log(`obj1NameFun2被执行`);
}

function obj2NameFun1() {
  console.log(`obj2NameFun被执行`);
}
function obj2NameFun2() {
  console.log(`obj2NameFun被执行`);
}
function obj1AgeFun1() {
  console.log(`obj1AgeFun被执行`);
}
function obj1AgeFun2() {
  console.log(`obj1AgeFun被执行`);
}

const obj1Map = new Map();
const obj2Map = new Map();
const weakMap = new WeakMap();
obj1Map.set("name", [obj1NameFun1, obj1NameFun2]);
obj1Map.set("age", [obj1AgeFun1, obj1AgeFun2]);
weakMap.set(obj1, obj1Map);
weakMap.set(obj2, [obj2NameFun1, obj2NameFun2]);


// 修改内容时
obj1.name = "zhangsan";

const targetMap = weakMap.get(obj1);
const fns = targetMap.get("name");
fns.forEach(item => item());


