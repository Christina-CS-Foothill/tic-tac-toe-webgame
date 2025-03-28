function openGameSettings(event) {
  gameSettingsOverlayElement.style.display = "block";
  backdrop.style.display = "block";
}

function saveGameSettings(event) {
  event.preventDefault();

  //color settings
  if (purpleOptionElement.selected) {
    //gameboard theme
    gameThemeLinkElement.setAttribute("href", "/styles/game.css");

    //main header
    mainHeaderElement.classList.add("default-background-scheme");
    mainHeaderElement.classList.remove("red-background-scheme");
    mainHeaderElement.classList.remove("blue-background-scheme");

    //body color
    bodyElement.classList.add("body-default-color");
    bodyElement.classList.remove("body-red-color");
    bodyElement.classList.remove("body-blue-color");

    //game config windows
    for (const gameConfigListElement of gameConfigListElements) {
      gameConfigListElement.classList.add("default-game-config-bg-color");
      gameConfigListElement.classList.remove("red-game-config-bg-color");
      gameConfigListElement.classList.remove("blue-game-config-bg-color");
    }

    //game config h3 elements
    for (const gameConfigH3Element of gameConfigH3Elements) {
      gameConfigH3Element.classList.add("default-game-config-h3-color");
      gameConfigH3Element.classList.remove("red-game-config-h3-color");
      gameConfigH3Element.classList.remove("blue-game-config-h3-color");
    }

    //game config p elements (player symbols)
    for (const gameConfigPElement of gameConfigPElements) {
      gameConfigPElement.classList.add("default-player-symbol-color");
      gameConfigPElement.classList.remove("red-player-symbol-color");
      gameConfigPElement.classList.remove("blue-player-symbol-color");
    }

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
    //gameboard theme
    gameThemeLinkElement.setAttribute("href", "/styles/red-game.css");

    //main header
    mainHeaderElement.classList.remove("default-background-scheme");
    mainHeaderElement.classList.add("red-background-scheme");
    mainHeaderElement.classList.remove("blue-background-scheme");

    //body
    bodyElement.classList.remove("body-default-color");
    bodyElement.classList.add("body-red-color");
    bodyElement.classList.remove("body-blue-color");

    //game config windows
    for (const gameConfigListElement of gameConfigListElements) {
      gameConfigListElement.classList.remove("default-game-config-bg-color");
      gameConfigListElement.classList.add("red-game-config-bg-color");
      gameConfigListElement.classList.remove("blue-game-config-bg-color");
    }

    //game config h3 elements
    for (const gameConfigH3Element of gameConfigH3Elements) {
      gameConfigH3Element.classList.remove("default-game-config-h3-color");
      gameConfigH3Element.classList.add("red-game-config-h3-color");
      gameConfigH3Element.classList.remove("blue-game-config-h3-color");
    }

    //game config p elements (player symbols)
    for (const gameConfigPElement of gameConfigPElements) {
      gameConfigPElement.classList.remove("default-player-symbol-color");
      gameConfigPElement.classList.add("red-player-symbol-color");
      gameConfigPElement.classList.remove("blue-player-symbol-color");
    }

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
    //gameboard theme
    gameThemeLinkElement.setAttribute("href", "/styles/blue-game.css");

    mainHeaderElement.classList.remove("default-background-scheme");
    mainHeaderElement.classList.remove("red-background-scheme");
    mainHeaderElement.classList.add("blue-background-scheme");

    //body
    bodyElement.classList.remove("body-default-color");
    bodyElement.classList.remove("body-red-color");
    bodyElement.classList.add("body-blue-color");

    //game config windows
    for (const gameConfigListElement of gameConfigListElements) {
      gameConfigListElement.classList.remove("default-game-config-bg-color");
      gameConfigListElement.classList.remove("red-game-config-bg-color");
      gameConfigListElement.classList.add("blue-game-config-bg-color");
    }

    //game config h3 elements
    for (const gameConfigH3Element of gameConfigH3Elements) {
      gameConfigH3Element.classList.remove("default-game-config-h3-color");
      gameConfigH3Element.classList.remove("red-game-config-h3-color");
      gameConfigH3Element.classList.add("blue-game-config-h3-color");
    }

    //game config p elements (player symbols)
    for (const gameConfigPElement of gameConfigPElements) {
      gameConfigPElement.classList.remove("default-player-symbol-color");
      gameConfigPElement.classList.remove("red-player-symbol-color");
      gameConfigPElement.classList.add("blue-player-symbol-color");
    }

    //buttons
    for (const btnElement of allBtnElements) {
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

  //font settings
  if (openSansOptionElement.selected) {
    bodyElement.classList.add("default-font-family");
    bodyElement.classList.remove("times-new-roman-font-family");
    bodyElement.classList.remove("courier-new-font-family");
  } else if (timesNewRomanOptionElement.selected) {
    bodyElement.classList.remove("default-font-family");
    bodyElement.classList.add("times-new-roman-font-family");
    bodyElement.classList.remove("courier-new-font-family");
  } else {
    bodyElement.classList.remove("default-font-family");
    bodyElement.classList.remove("times-new-roman-font-family");
    bodyElement.classList.add("courier-new-font-family");
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
