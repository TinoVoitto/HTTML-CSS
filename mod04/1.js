"use strict";

let form = document.querySelector("form");
const query_input = document.getElementById("query");
const print_answer = document.getElementById("print_answer");

async function tvInfo(event) {
  event.preventDefault();
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${query_input.value}`,
  );
  const info = await response.json();

  console.log(info);
  print_answer.innerHTML = "";

  for (let i = 0; i < info.length; i++) {
    const tvShow = info[i].show;

    const article = document.createElement("article");

    const name = tvShow.name;
    const url = tvShow.url;

    let image = tvShow.image?.medium;
    if (image == null) {
      image = "https://placehold.co/210x295?text=Not%20Found";
    }

    const summary = tvShow.summary;

    const n = document.createElement("h2");
    n.textContent = name;

    const u = document.createElement("a");
    u.href = url;
    u.textContent = "Details";
    u.target = "_blank";

    const img = document.createElement("img");
    img.src = image;
    img.alt = name;

    const s = document.createElement("div");
    s.innerHTML = summary;

    article.appendChild(n);
    article.appendChild(img);
    article.appendChild(document.createElement("br"));
    article.appendChild(u);
    article.appendChild(s);

    print_answer.appendChild(article);
  }
}

form.addEventListener("submit", tvInfo);
