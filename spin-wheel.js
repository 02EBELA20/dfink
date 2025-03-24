// 10 ორიგინალური "Never Have I Ever" წინადადება
const statements = [
  "Never have I ever danced on a table at a party.",
  "Never have I ever sung karaoke in front of strangers.",
  "Never have I ever forgotten someone's name right after meeting them.",
  "Never have I ever laughed so hard I cried in public.",
  "Never have I ever worn socks with sandals.",
  "Never have I ever accidentally sent a text to the wrong person.",
  "Never have I ever stayed up all night binge-watching a series.",
  "Never have I ever pretended to know a song I didn’t actually know.",
  "Never have I ever tried to impress someone and failed miserably.",
  "Never have I ever gotten lost in my own city."
];

// მოთამაშეების მართვა
let players = [];
let currentStatementIndex = 0;
let turnPairs = [];
let currentPairIndex = 0;

// ყველა შესაძლო წყვილის გენერირება
function generateTurnPairs() {
  turnPairs = [];
  for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < players.length; j++) {
          if (i !== j) {
              turnPairs.push({ asker: players[i], answerer: players[j] });
          }
      }
  }
  turnPairs.sort(() => Math.random() - 0.5);
}

// მოდალური ფანჯრის მართვა
document.getElementById('startGameBtn').addEventListener('click', () => {
  document.getElementById('setupModal').style.display = 'flex';
});

document.getElementById('addPlayerBtn').addEventListener('click', () => {
  const playerInputs = document.getElementById('playerInputs');
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.placeholder = `Player ${playerInputs.children.length + 1}`;
  newInput.className = 'playerName';
  playerInputs.appendChild(newInput);
});

document.getElementById('startPlayingBtn').addEventListener('click', () => {
  const playerInputs = document.querySelectorAll('.playerName');
  players = Array.from(playerInputs)
      .map(input => input.value.trim())
      .filter(name => name !== '');

  if (players.length < 2) {
      alert('Please add at least 2 players to start the game!');
      return;
  }

  generateTurnPairs();
  currentPairIndex = 0;
  currentStatementIndex = 0;

  document.getElementById('setupModal').style.display = 'none';
  document.getElementById('startGameBtn').style.display = 'none';
  document.getElementById('gameArea').style.display = 'block';
});

// "Cancel" ღილაკი
document.getElementById('cancelBtn').addEventListener('click', () => {
  document.getElementById('setupModal').style.display = 'none';
  document.getElementById('startGameBtn').style.display = 'block';
  document.getElementById('gameArea').style.display = 'none';
  // დავრწმუნდეთ, რომ container ცენტრში რჩება
  document.querySelector('.container').style.display = 'flex';
  document.querySelector('.container').style.justifyContent = 'center';
  document.querySelector('.container').style.alignItems = 'center';
});

// "Back to Setup" ღილაკი
document.getElementById('backToSetupBtn').addEventListener('click', () => {
  document.getElementById('gameArea').style.display = 'none';
  document.getElementById('startGameBtn').style.display = 'block';
  document.getElementById('setupModal').style.display = 'flex';

  const playerInputs = document.getElementById('playerInputs');
  playerInputs.innerHTML = `
      <input type="text" placeholder="Player 1" class="playerName">
      <input type="text" placeholder="Player 2" class="playerName">
  `;
  // დავრწმუნდეთ, რომ container ცენტრში რჩება
  document.querySelector('.container').style.display = 'flex';
  document.querySelector('.container').style.justifyContent = 'center';
  document.querySelector('.container').style.alignItems = 'center';
});

// შემდეგი რაუნდი
document.getElementById('nextTurnBtn').addEventListener('click', () => {
  if (currentPairIndex >= turnPairs.length) {
      generateTurnPairs();
      currentPairIndex = 0;
  }

  const currentPair = turnPairs[currentPairIndex];
  const turnText = `${currentPair.asker} asks ${currentPair.answerer}`;
  const turnElement = document.getElementById('currentTurn');
  turnElement.innerText = turnText;

  turnElement.style.animation = 'none';
  turnElement.offsetHeight;
  turnElement.style.animation = 'slideInWithGlow 1s ease-in-out';

  if (currentStatementIndex >= statements.length) {
      currentStatementIndex = 0;
  }

  const statement = statements[currentStatementIndex];
  const statementElement = document.getElementById('currentStatement');
  statementElement.innerText = statement;

  document.getElementById('statementArea').style.display = 'block';

  statementElement.style.animation = 'none';
  statementElement.offsetHeight;
  statementElement.style.animation = 'slideInWithGlow 1s ease-in-out';

  currentStatementIndex++;
  currentPairIndex++;
});