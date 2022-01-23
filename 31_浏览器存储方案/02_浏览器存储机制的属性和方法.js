// 1. 存储机制
// 浏览器会一直保留localStorage存储的内容（本地存储）
// localStorage.setItem("name", "zhangsan");

// 浏览器网页在关闭之后，会自动删除session保存的内容（会话存储）
// sessionStorage.setItem("name", "xiaoming");

// 2. length
console.log(localStorage.length);
// 遍历localStorage中存储的value值
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(localStorage.getItem(key));
}

// 3. key方法 -> 获取key
console.log(localStorage.key(0));

// 4. getItem -> 获取value
console.log(localStorage.getItem("name"));

// 5.removeItem -> 删除存储的对应值
localStorage.removeItem("name");

// 6.clear -> 清空localStorage
localStorage.clear();

