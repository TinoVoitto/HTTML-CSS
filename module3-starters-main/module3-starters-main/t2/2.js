const targetList = document.querySelector("#target");
const text = ["first", "second", "third"];

for (let i = 0; i < text.length; i++) {
  const bullet = document.createElement("li");
  bullet.appendChild(document.createTextNode(text[i]));
  targetList.appendChild(bullet);

  if (i === 1) {
    bullet.classList.add("my-item");
  }
}
