// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );


const ask = (question, yes, no) => {
  if (question === "yes") yes();
  else no();
}

ask("yes", () => console.log('yes :>> '), () => console.log('no :>> '))