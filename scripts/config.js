function openPlayerConfig(event) {
  console.dir(event.target);
  playerConfigOverlayElement.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdrop.style.display = "none";
}
