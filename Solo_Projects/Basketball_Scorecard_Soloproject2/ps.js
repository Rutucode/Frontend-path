// Home Team Score
const homeTeam = {
    plus1: document.getElementById("home-score-btn-1"),
    plus2: document.getElementById("home-score-btn-2"),
    plus3: document.getElementById("home-score-btn-3"),
    score: document.getElementById("home-score"),
    addScore: 0,
  };
  
  function increaseHomeScore(points) {
    homeTeam.addScore += points;
    homeTeam.score.innerText = homeTeam.addScore;
  }
  
  homeTeam.plus1.addEventListener("click", () => increaseHomeScore(1));
  homeTeam.plus2.addEventListener("click", () => increaseHomeScore(2));
  homeTeam.plus3.addEventListener("click", () => increaseHomeScore(3));