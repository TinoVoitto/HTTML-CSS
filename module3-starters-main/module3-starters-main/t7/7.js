"use strict";

const trigger = document.querySelector("#trigger");
const image = document.querySelector("#target");

trigger.addEventListener("mouseover", function () {
  image.src = "img/picB.jpg";
});

trigger.addEventListener("mouseout", function () {
  image.src = "img/picA.jpg";
});
