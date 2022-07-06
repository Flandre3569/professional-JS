let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (const key in salaries) {
  if (Object.hasOwnProperty.call(salaries, key)) {
    const element = salaries[key];
    sum += element
  }
}

console.log('sum :>> ', sum);

// 所有属性乘以2

// 在调用之前
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2
    }
  }
}

multiplyNumeric(menu);

console.log('menu :>> ', menu);