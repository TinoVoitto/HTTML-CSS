"use strict";

const form = document.querySelector("form");
const query_input = document.getElementById("query");
const resultsContainer = document.getElementById("print_answer");

async function tvInfo(event) {
  event.preventDefault();

  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query_input.value}`,
    );
    const info = await response.json();

    console.log(info);

    resultsContainer.innerHTML = "";

    info.forEach((item) => {
      const tvShow = item.show;

      const article = document.createElement("article");

      const nameHeader = document.createElement("h2");
      nameHeader.textContent = tvShow.name;

      const link = document.createElement("a");
      link.href = tvShow.url;
      link.target = "_blank";
      link.textContent = "View Details";

      const img = document.createElement("img");
      img.src = tvShow.image
        ? tvShow.image.medium
        : "https://placehold.co/210x295?text=Not%20Found";
      img.alt = tvShow.name;

      const summaryDiv = document.createElement("div");
      summaryDiv.innerHTML = tvShow.summary || "No summary available.";

      article.appendChild(nameHeader);
      article.appendChild(img);
      article.appendChild(link);
      article.appendChild(summaryDiv);

      resultsContainer.appendChild(article);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

form.addEventListener("submit", tvInfo);
