let homescore = 0;
let homescoreDisplay = document.getElementById("homescorescreen");
homescoreDisplay.textContent = homescore;

let guestscore = 0;
let guestscoreDisplay = document.getElementById("guestscorescreen");
guestscoreDisplay.textContent = guestscore;

function homefunction(score) {
  homescore += score;
  homescoreDisplay.textContent = homescore;
  highlightScore();
}

function guestbutton(score) {
  guestscore += score;
  guestscoreDisplay.textContent = guestscore;
  highlightScore();
}

function newgame() {
  homescore = 0;
  guestscore = 0;
  homescoreDisplay.textContent = homescore;
  guestscoreDisplay.textContent = guestscore;
  removeHighlight();
}

function highlightScore() {
  if (homescore > guestscore) {
    homescoreDisplay.classList.add("highlight");
    guestscoreDisplay.classList.remove("highlight");
  } else if (guestscore > homescore) {
    guestscoreDisplay.classList.add("highlight");
    homescoreDisplay.classList.remove("highlight");
  } else {
    removeHighlight();
  }
}

function removeHighlight() {
  homescoreDisplay.classList.remove("highlight");
  guestscoreDisplay.classList.remove("highlight");
}
