function openGameSettings(event) {
  gameSettingsOverlayElement.style.display = "block";
  backdrop.style.display = "block";
}

function saveGameSettings(event) {
  event.preventDefault();
  if (purpleOptionElement.selected) {
    //main header
    mainHeaderElement.classList.add("default-background-scheme");
    mainHeaderElement.classList.remove("red-background-scheme");
    mainHeaderElement.classList.remove("blue-background-scheme");

    //buttons
    for (const btnElement of allBtnElements) {
      if (btnElement.classList.contains("btn-alt")) {
        //must be a clear btn
        btnElement.classList.add("default-color");
        btnElement.classList.remove("blue-scheme");
        btnElement.classList.remove("red-scheme");
      } else {
        btnElement.classList.add("default-background-scheme");
        btnElement.classList.remove("blue-background-scheme");
        btnElement.classList.remove("red-background-scheme");
      }
    }
  } else if (redOptionElement.selected) {
    //main header
    mainHeaderElement.classList.remove("default-background-scheme");
    mainHeaderElement.classList.add("red-background-scheme");
    mainHeaderElement.classList.remove("blue-background-scheme");

    //buttons
    for (const btnElement of allBtnElements) {
      if (btnElement.classList.contains("btn-alt")) {
        //must be a clear btn
        btnElement.classList.remove("default-color");
        btnElement.classList.remove("blue-scheme");
        btnElement.classList.add("red-scheme");
      } else {
        btnElement.classList.remove("default-background-scheme");
        btnElement.classList.remove("blue-background-scheme");
        btnElement.classList.add("red-background-scheme");
      }
    }
  } else {
    mainHeaderElement.classList.remove("default-background-scheme");
    mainHeaderElement.classList.remove("red-background-scheme");
    mainHeaderElement.classList.add("blue-background-scheme");

    //buttons
    for (const btnElement of allBtnElements) {
      console.log(btnElement);
      if (btnElement.classList.contains("btn-alt")) {
        //must be a clear btn
        btnElement.classList.remove("default-color");
        btnElement.classList.add("blue-scheme");
        btnElement.classList.remove("red-scheme");
      } else {
        btnElement.classList.remove("default-background-scheme");
        btnElement.classList.add("blue-background-scheme");
        btnElement.classList.remove("red-background-scheme");
      }
    }
  }

  closeSettingsConfig();
}

function closeSettingsConfig() {
  gameSettingsOverlayElement.style.display = "none";
  backdrop.style.display = "none";
}

function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // the '+' symbol converts the string to a num
  playerConfigOverlayElement.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  gameSettingsOverlayElement.style.display = "none";
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

/** TODO: Add a config setting where user can change color scheme
 * 1. construct buttons
 */
