const message = 'hello world';

const newMessage = message.padStart(15, "*");
const newMessage2 = message.padEnd(15, "-");

console.log(newMessage);
console.log(newMessage2);

const newNewMessage = message.padStart(15, "*").padEnd(20, "-");
console.log(newNewMessage);

//小案例
const moneyCard = '12315131231254124';
const lastMoneyCard = moneyCard.slice(-4);
const finalMoneyCard = lastMoneyCard.padStart(moneyCard.length, '*');
console.log(finalMoneyCard);