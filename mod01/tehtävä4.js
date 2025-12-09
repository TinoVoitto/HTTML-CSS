/*
In the Harry Potter children's books, 
the sorting hat assigns a new student at Hogwarts School of Witchcraft and Wizardry to one of the four classes, 
which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw. 

Write an electronic sorting hat that asks for a student's name and draws a room for that student. 

If you enter Anna as the name, for example, the program prints to the HTML document "Anna, you are Ravenclaw." (3p)

Use math.random() to draw a value (1, 2, 3 or 4)
Once the number is drawn, you need to use a multiple choice structure (if, else if, ..., else or switch).
*/
let name = window.prompt("Enter name: ");
let randomNum = Math.floor(Math.random() * 3);

if (randomNum == 0) {
  console.log(`${name} you are Ravenclaw!`);
} else if (randomNum == 1) {
  console.log(`${name} you are Hufflepuff!`);
} else if (randomNum == 2) {
  console.log(`${name} you are Slytherin!`);
} else {
  console.log(`${name} you are Gryffindor!`);
}
