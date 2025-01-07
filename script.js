document.getElementById("greetBtn").addEventListener("click", function () {
  const name = prompt("What is your name?");
  if (name) {
    const greetingDiv = document.getElementById("greeting");
    greetingDiv.textContent = `Hello, ${name}! Welcome to my page!`;
    greetingDiv.style.opacity = 1;
    greetingDiv.style.color = "#990f42";
    greetingDiv.style.fontSize = "30px";
  }
});
