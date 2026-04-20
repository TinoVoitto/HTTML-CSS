/*Write a program that asks the user for the number of participants. 
After this, the program asks for the names of all participants. 
Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order.*/
let NumOfPartcipants = Number(
  window.prompt(`Enter the number of participants: `),
);
let NamesOfPartcipants = [];

for (let i = 1; i <= NumOfPartcipants; i++) {
  let name = window.prompt(`Enter the name of partcipant ${i}:`);
  NamesOfPartcipants.push(name);
}

NamesOfPartcipants.sort();

for (name of NamesOfPartcipants) {
  console.log(name);
}
