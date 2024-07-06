let plus1 = document.getElementById("home-score-btn-1");
let plus2 = document.getElementById("home-score-btn-2");
let plus3 = document.getElementById("home-score-btn-3");

let score1 = document.getElementById("home-score");
let addScore = 0;

function increaseHomeScoreOne() {
  addScore += 1;
  score1.innerText = addScore;
}
function increaseHomeScoretwo() {
  addScore += 2;
  score1.innerText = addScore;
}
function increaseHomeScorethree() {
  addScore += 3;
  score1.innerText = addScore;
}
//-----------------------------------------

let plus1Guest = document.getElementById("guest-score-btn-1");
let plus2Guest = document.getElementById("guest-score-btn-2");
let plus3Guest = document.getElementById("guest-score-btn-3");

let guestScore = document.getElementById("guest-score");
let addScore2 = 0;
function increaseGuestScoreOne() {
  addScore2 += 1;
  guestScore.innerText = addScore2;
}

function increaseGuestScoretwo() {
  addScore2 += 2;
  guestScore.innerHTML = addScore2;
}

function increaseGuestScorethree() {
  addScore2 += 3;
  guestScore.innerHTML = addScore2;
}

//-----------------------------------------

let resetBtn = document.getElementById("reset-btn");

let intervalId;

function resetScore() {
  guestScore.innerHTML = "0";
  score1.innerHTML = "0";
  addScore = 0;
  addScore2 = 0;
  timeCount.innerHTML = "00:00";

  if (intervalId) {
    clearInterval(intervalId);
  }

  startTimer(totalMinutes, timeCount);
}

//----------------------------------------------------

let timeCount = document.getElementById("time");

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  intervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

var totalMinutes = 3600 * 2;

window.onload = function () {
  display = document.querySelector("#time");
  startTimer(totalMinutes, display);
};

resetBtn.addEventListener("click", resetScore);
