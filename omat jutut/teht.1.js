console.log("I am printing to console");

let username;

document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myH3").textContent = `Hello, ${username}`;
};

let eka;

document.getElementById("First").onclick = function () {
  eka = document.getElementById("myFirst").value;
  console.log(eka);
  document.getElementById("Eka").textContent = `${eka}`;
};

let toka;

document.getElementById("Second").onclick = function () {
  toka = document.getElementById("mySecond").value;
  console.log(toka);
  document.getElementById("Toka").textContent = `${toka}`;
};

let kolme;

document.getElementById("Third").onclick = function () {
  kolme = document.getElementById("myThird").value;
  console.log(kolme);
  document.getElementById("Kolmas").textContent = `${kolme}`;
};
