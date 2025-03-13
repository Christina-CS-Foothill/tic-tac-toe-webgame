function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // the '+' symbol converts the string to a num
  playerConfigOverlayElement.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim(); //trims off excess whitespace before and after entry
  if (!enteredPlayerName) {
    //empty strings are considered falsey values
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name.";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
