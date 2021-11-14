// 对于setTimeout
// setTimeout(function () {
//   console.log(this);
// },2000)

// 对于监听
// const box = document.querySelector('.box');
// box.addEventListener('click', function () {
//   console.log(this);
// })

// 对于箭头函数
var a = () => {
  console.log(this);
}

a();

function b() {
  this.c = function () {
    console.log(this);
  }
};
var bber = new b();
bber.c();

