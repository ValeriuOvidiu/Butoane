function createButtons() {
  const numberOfButtons = document.getElementById("buttons").value
  const theWinner = Math.floor(Math.random() * (numberOfButtons) + 1)
  document.getElementById("buttonsOutput").innerHTML = ''
  for (let i = 1; i <= numberOfButtons; ++i) {
    const button = document.createElement("button");
    button.innerHTML = "Push " + i;
    const body = document.getElementById("buttonsOutput");
    body.appendChild(button);
    if (i == theWinner) {
      button.addEventListener("click", function () {
        document.getElementById("output").innerHTML = "Castigator"
        button.className = "favorite styledWinner"
      })
    } else {
      button.addEventListener("click", function () {
        document.getElementById("output").innerHTML = "Pierzator"
        button.className = "favorite styledLoser"
      })
    }
  }
  document.getElementById("buttons").value = ''
}

const randomButton = Math.floor(Math.random() * (4 - 1) + 1)

function checkButton(buttonValue, buttonId) {
  if (buttonValue == randomButton) {
    document.getElementById("output").innerHTML = "Castigator"
    document.getElementById(buttonId).className = "favorite styledWinner"
    return;
  }
  document.getElementById("output").innerHTML = "Pierzator"
  document.getElementById(buttonId).className = "favorite styledLoser"
}

