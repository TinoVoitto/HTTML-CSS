let age = 26;
let price = 10.99;
let gpa = 2.1;
let name = "Tino";
let online = false;

//console.log(`${name} is online: ${online}`);
//console.log(`You are ${age} years old`);
//console.log(`The price is ${price}`);
//console.log(`Your gpa is ${gpa}`);

//console.log(typeof name);

document.getElementById("p1").textContent = `Your name is ${name}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `You are online: ${online}`;
