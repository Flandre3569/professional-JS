const obj = {
  name: "mx",
  age: 18
}

console.log(Object.entries(obj));
// ES8新增----> Object.entries()
const ObjectEntries = Object.entries(obj);
ObjectEntries.forEach(item => {
  console.log(item[0],item[1]);
})

// 如果使用entries对普通数组进行处理，则会以索引值作为key
console.log(Object.entries(['abc','edf','asd']));