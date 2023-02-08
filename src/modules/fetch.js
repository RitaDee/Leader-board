import url from './api.js';
import showScores from './dynamic-page.js';

const getAllScores = async () => {
  await fetch(
    url,
  )
    .then((response) => response.json())
    .then((json) => showScores(json));
};

export default getAllScores;