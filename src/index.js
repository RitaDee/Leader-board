import './style.css';
import getAllScores from './modules/fetch.js';
import postScore from './modules/post.js';

window.onload = getAllScores;

const userName = document.querySelector('.name');
const userScore = document.querySelector('.score');
const refreshButton = document.querySelector('.refresh');
const formSubmit = document.querySelector('.form-score');

refreshButton.addEventListener('click', () => {
  getAllScores();
});

formSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = userName.value;
  const score = userScore.value;
  postScore(name, score);
  formSubmit.reset();
});
