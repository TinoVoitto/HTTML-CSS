let username;

document.getElementById("submitButton").onclick = function () {
  username = document.getElementById("inputName").value;
  console.log(username);
  document.getElementById("greeting").textContent = `Hello, ${username}`;
};
