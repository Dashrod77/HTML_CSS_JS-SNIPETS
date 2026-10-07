let darkmode_button = document.getElementById("darkmode-button");

  darkmode_button.addEventListener("click", function() {
  document.body.classList.toggle("darkmode");
  console.log("Dark mode toggled");
});
