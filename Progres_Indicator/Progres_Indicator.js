
let next_button = document.getElementById("next_button");
let progress_bars = document.getElementById("progress_bars");
let back_button = document.getElementById("back_button");

next_button.addEventListener("click", function() {
  if (progress_bars.value < 100) {
    progress_bars.value += 25;
  }
});
back_button.addEventListener("click", function() {
  if (progress_bars.value > 0) {
    progress_bars.value -= 25;
  }
});
