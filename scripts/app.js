const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const gameSettingsOverlayElement = document.getElementById("settings-overlay");
const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const mainHeaderElement = document.getElementById("main-header");
const allBtnElements = document.querySelectorAll("button");
const bodyElement = document.querySelector("body");
const gameConfigListElements = document.querySelectorAll(
  "#game-configuration li"
);
const gameConfigH3Elements = document.querySelectorAll(
  "#game-configuration h3"
);
const gameConfigPElements = document.querySelectorAll("#game-configuration p");
const gameThemeLinkElement = document.getElementById("game-theme");

const settingsBtnElement = document.getElementById("settings-btn");
const saveSettingsBtnElement = document.getElementById("save-settings-btn");
const cancelSettingsBtnElement = document.getElementById("cancel-settings-btn");
const purpleOptionElement = document.getElementById("purple");
const redOptionElement = document.getElementById("red");
const blueOptionElement = document.getElementById("blue");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
// const gameFieldElements = document.querySelectorAll("#game-board li"); //all list items in game board
const gameBoardElement = document.getElementById("game-board");

settingsBtnElement.addEventListener("click", openGameSettings);
saveSettingsBtnElement.addEventListener("click", saveGameSettings);
cancelSettingsBtnElement.addEventListener("click", closeSettingsConfig);

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }

gameBoardElement.addEventListener("click", selectGameField);
