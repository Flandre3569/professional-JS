const divEl = document.querySelector("#d");
const spanEl = document.querySelector("#s");
const pEl = document.querySelector("#p");

// 常见属性
console.log(divEl.nodeName, spanEl.nodeName);
console.log(divEl.nodeType, spanEl.nodeType);

// 拿到文本
const childNode = divEl.childNodes[0];
console.log(childNode.nodeValue);

// 常见方法
const strongEl = document.createElement("strong");
strongEl.textContent = "我是strong";
// 添加一个strong标签
divEl.appendChild(strongEl);

// document虽然含有appendChild方法，但是不能直接使用
// document.body.appendChild(strongEl);