const user = {
  name: "John",
  girlFriend: {
    name: "Lily"
  },
  dance() {
    console.log(`${this.name} can dance`);
  }
}

console.log(user.name);
console.log(user?.girlFriend);
console.log(user?.pet);


// 可选链的变体

// 可选链和()配合使用
user.dance?.();
user.sing?.(); // 如果没有这个函数则什么都不做，不会产生报错


// 可选链和[]配合使用
user.firstName = "Smith";
let key = "firstName";
let key2 = "lastName";
console.log(user?.[key]);
console.log(user?.[key2]);

// 和delete配合使用
delete user?.name;
console.log(user);