let year = window.prompt("Enter a year: ");

if (year % 4 == 0) {
  console.log(`The year ${year} is a leap year`);
} else if (year % 4000 == 0) {
  console.log(`The year ${year} is a leap year`);
} else {
  console.log(`The year ${year} is not a leap year`);
}
