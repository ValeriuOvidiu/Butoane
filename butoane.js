function createButtons() {
  var numberOfButtons = prompt("numarul de butoane ")
  var theWinner = prompt("butonul castigator ")
  for (let i = 1; i <= numberOfButtons; ++i) {
    var button = document.createElement("button");
    button.innerHTML = "Push " + i;
    var body = document.getElementById("buttonsOutput");
    body.appendChild(button);
    if (i == theWinner) {
      button.addEventListener("click", function () {
        alert("ai apasat butonul castigator");
      });
    } else {
      button.addEventListener("click", function () {
        alert("mai incearca");
      });
    }
  }
}
