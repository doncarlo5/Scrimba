let homescore = 0;
document.getElementById("homescorescreen").textContent = homescore;

let guestscore = 0;
document.getElementById("guestscorescreen").textContent = guestscore;

function homefunction(score) {
  homescore += score;
  document.getElementById("homescorescreen").textContent = homescore;
}

function guestbutton(score) {
  guestscore += score;
  document.getElementById("guestscorescreen").textContent = guestscore;
}

function newgame() {
  homescore = 0;
  guestscore = 0;
  document.getElementById("homescorescreen").textContent = homescore;
  document.getElementById("guestscorescreen").textContent = guestscore;
}