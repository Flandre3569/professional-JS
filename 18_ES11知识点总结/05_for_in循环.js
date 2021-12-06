const obj = {
  name: 'mx',
  age: 18
}

// for..in 循环遍历的是key值而不是value值
for (const item in obj) {
  console.log(item);
}