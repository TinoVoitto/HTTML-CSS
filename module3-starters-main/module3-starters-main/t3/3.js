"use strict";
const names = ["John", "Paul", "Jones"];

const nameList = document.querySelector("#target");
let html = "";

for (let i = 0; i < names.length; i++) {
  html += `<li>${names[i]}</li>`;
}

nameList.innerHTML = html;
