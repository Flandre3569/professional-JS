function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  })
}

async function one2FiveInAsync() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
    await sleep(1000);
  }
}

one2FiveInAsync();