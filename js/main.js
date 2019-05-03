/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

const rps = {
  r: {
    img: 'imgs/rock.png',
    beats: 's'
  },
  p: {
    img: 'imgs/paper.png',
    beats: 'r'
  },
  s: {
    img: 'imgs/scissors.png',
    beats: 'p'
  }
};

/*----- app's state (variables) -----*/
let results, scores, winner;

/*----- cached element references -----*/
const playerScoreEl = document.querySelector('#player > h2');
const computerScoreEl = document.querySelector('#computer > h2');
const tieScoreEl = document.querySelector('#tie > h2');
const playerResultEl = document.querySelector('#player > div > div');
const computerResultEl = document.querySelector('#computer > div > div');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', handleGo);

/*----- functions -----*/
init();

function handleGo() {
  results.p = getRandomResult();
  results.c = getRandomResult();
  winner = getWinner();
  scores[winner]++;
  render();
}

function getWinner() {
  return results.p === results.c ?
    't'
  :
    // does what the player beats equal to what the computer has?
    rps[results.p].beats === results.c ? 'p' : 'c';
}

function getRandomResult() {
  return 'rps'.charAt(Math.floor(Math.random() * 3));
}

function render() {
  // render scores
  playerScoreEl.textContent = scores.p;
  computerScoreEl.textContent = scores.c;
  tieScoreEl.textContent = scores.t;
  // render results
  playerResultEl.style.backgroundImage = `url(${rps[results.p].img})`;
  computerResultEl.style.backgroundImage = `url(${rps[results.c].img})`;
  // color border if winner, otherwise "hide" the border
  playerResultEl.parentElement.style.border = winner === 'p' ? '2vmin solid darkgrey' : '2vmin solid white';
  computerResultEl.parentElement.style.border = winner === 'c' ? '2vmin solid darkgrey' : '2vmin solid white';
}

function init() {
  winner = null;
  results = {
    p: 'r',
    c: 'r'
  };
  scores = {
    p: 0,
    c: 0,
    t: 0
  };
  render();
}