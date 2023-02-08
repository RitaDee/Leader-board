const scoreSheet = document.querySelector('.score-list');

const match = (item) => {
  scoreSheet.innerHTML += `
    <li class="dynamic">
    <span>${item.user}</span>
    <span>${item.score} points</span>
    </li>`;
};

const showScores = (obj) => {
  scoreSheet.innerHTML = '';
  const scores = obj.result;
  scores.sort((a, b) => b.score - a.score);
  scores.forEach(match);
};

export default showScores;