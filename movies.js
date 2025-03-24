// ფილმები სირთულის დონეების მიხედვით
const movies = {
  easy: [
      { emojis: "🦁👑🌍", answer: "The Lion King" },
      { emojis: "❄️👑👭", answer: "Frozen" },
      { emojis: "🦁🐯👑", answer: "The Jungle Book" },
      { emojis: "🐘🎪", answer: "Dumbo" },
      { emojis: "🦁🐾", answer: "The Aristocats" }
  ],
  medium: [
      { emojis: "🦁🐒🌴", answer: "Tarzan" },
      { emojis: "🐀🧀", answer: "The Rescuers" },
      { emojis: "🐻🌲", answer: "Brother Bear" },
      { emojis: "🐘🏙️", answer: "Zootopia" },
      { emojis: "🦁🐍🌿", answer: "The Jungle Book" }
  ],
  hard: [
      { emojis: "🦁👑🌍🐾", answer: "The Lion King" },
      { emojis: "❄️👑👭🏰", answer: "Frozen" },
      { emojis: "🦁🐯👑🌴🐍", answer: "The Jungle Book" },
      { emojis: "🐘🎪🎈", answer: "Dumbo" },
      { emojis: "🦁🐾🎹", answer: "The Aristocats" }
  ]
};

let currentMovies = [];
let currentMovieIndex = 0;

// მოდალური ფანჯრის მართვა
document.getElementById('startGameBtn').addEventListener('click', () => {
  document.getElementById('setupModal').style.display = 'flex';
});

document.getElementById('startPlayingBtn').addEventListener('click', () => {
  const difficulty = document.getElementById('difficultySelect').value;
  currentMovies = movies[difficulty];
  currentMovieIndex = 0;

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
  // დავრწმუნდეთ, რომ container ცენტრში რჩება
  document.querySelector('.container').style.display = 'flex';
  document.querySelector('.container').style.justifyContent = 'center';
  document.querySelector('.container').style.alignItems = 'center';
});

// "Next Movie" ღილაკი
document.getElementById('nextMovieBtn').addEventListener('click', () => {
  if (currentMovieIndex >= currentMovies.length) {
      currentMovieIndex = 0; // თავიდან დაწყება
  }

  const movie = currentMovies[currentMovieIndex];
  const emojiElement = document.getElementById('currentEmojis');
  emojiElement.innerText = movie.emojis;

  // ანიმაციის გადატვირთვა emoji-ებისთვის
  emojiElement.style.animation = 'none';
  emojiElement.offsetHeight;
  emojiElement.style.animation = 'slideInWithGlow 1s ease-in-out';

  // დამალეთ პასუხი და "Show Answer" ღილაკი
  const answerArea = document.getElementById('answerArea');
  answerArea.style.display = 'none';
  document.getElementById('showAnswerBtn').style.display = 'inline-block';

  currentMovieIndex++;
});

// "Show Answer" ღილაკი
document.getElementById('showAnswerBtn').addEventListener('click', () => {
  const movie = currentMovies[currentMovieIndex - 1];
  const answerElement = document.getElementById('correctAnswer');
  answerElement.innerText = `Answer: ${movie.answer}`;

  // გამოჩნდეს პასუხის ყუთი
  const answerArea = document.getElementById('answerArea');
  answerArea.style.display = 'block';

  // ანიმაციის გადატვირთვა პასუხისთვის
  answerElement.style.animation = 'none';
  answerElement.offsetHeight;
  answerElement.style.animation = 'slideInWithGlow 1s ease-in-out';

  // დამალეთ "Show Answer" ღილაკი
  document.getElementById('showAnswerBtn').style.display = 'none';
});