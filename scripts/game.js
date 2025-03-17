function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;

  gameOverElement.firstElementChild.innerHTML =
    "You won, <span id='winner-name'>PLAYER NAME</span>!";
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame(event) {
  //check falsy values of player names
  if (!players[0].name || !players[1].name) {
    alert("Please set custom player names for both players.");
    return;
  }

  resetGameStatus();

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver) {
    //only respond when actual list item has been clicked and game isn't over
    return;
  }
  const selectedField = event.target;
  const selectedRow = selectedField.dataset.row - 1;
  const selectedColumn = selectedField.dataset.col - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    //don't allow spaces already clicked to be clicked again
    alert("Please select an empty field.");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  // console.log("row: " + selectedRow + ", col: " + selectedColumn);
  // console.log(gameData);
  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
    return;
  }
  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  //rows
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      // console.log(gameData[i][0] + " won");
      return gameData[i][0];
    }
  }
  //cols
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      // console.log(gameData[0][i] + " won");
      return gameData[0][i];
    }
  }
  //diag 1: top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    // console.log(gameData[0][0] + " won");
    return gameData[0][0];
  }
  //diag 2: bottom left to top right
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    // console.log(gameData[0][2] + " won");
    return gameData[0][2];
  }
  if (currentRound === 9) {
    return -1; //value for a draw
  }
  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverElement.style.display = "block";
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
