const obj1 = { name: 'mx' };
const obj2 = { name: 'yx' };

// 使用Map进行对应
const map = new Map();
map.set(obj1, "aaa");
map.set(obj2, "bbb");
console.log(map);

map.set(1, "ccc");
map.set(2, obj1);
console.log(map);

// 对map进行遍历
map.forEach((item, key) => {
  console.log(key,item);
})

for (const item of map) {
  console.log(item[0],item[1]);
}

for (const [key, value] of map) {
  console.log(key,value);
}