// function foo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hahahaha")
//     }, 2000)
//   })
// }

function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("cuolecuole")
    }, 2000)
  })
}

async function getData() {
  const res = await foo();
  console.log(res);
  console.log("heiheiheihei");
}


getData().catch((err) => {
  console.log(err);
})

console.log("script end");