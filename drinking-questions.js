const questions = [
  "რა იყო შენი ყველაზე გიჟური ღამე?",
  "რას გააკეთებდი, რომ მოგწონებულ ადამიანს თავი დაგამახსოვროს?",
  "რომელია შენი ყველაზე დიდი სირცხვილი?",
  "გინახავს შენი მეგობარი უცნაურ სიტუაციაში?",
  "გქონია უცნაური ოცნება ვინმესთან დაკავშირებით?",
  "რომელი ცნობილი ადამიანი მოგწონს?",
  "თუ მოგიწევდა ერთი წელი კუნძულზე ყოფნა, რა წაიღებდი?",
  "რამდენჯერ გქონია ურთიერთობა კამათის შემდეგ?",
  "ყველაზე უხერხული მომენტი წვეულებაზე?",
  "რომელია შენი ყველაზე დიდი საიდუმლო?"
];

const numCards = 20;
const cardArea = document.getElementById("card-area");
const drawButton = document.getElementById("draw-button");

// კარტების გენერაცია
for (let i = 0; i < numCards; i++) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.style.top = `${Math.random() * 60}px`;
  card.style.left = `${Math.random() * 70}%`;
  cardArea.appendChild(card);
}

// კარტების ქაოტური მოძრაობა
gsap.to(".card", {
  duration: 1.5,
  y: () => Math.random() * 100 - 50,
  x: () => Math.random() * 100 - 50,
  rotation: () => Math.random() * 30 - 15,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// ღილაკზე დაჭერისას – კითხვა ამოირჩევა
drawButton.addEventListener("click", () => {
  let cards = document.querySelectorAll(".card");

  gsap.to(cards, { duration: 0.5, opacity: 0, scale: 0.5 });

  setTimeout(() => {
      let questionCard = document.createElement("div");
      questionCard.classList.add("card", "selected");
      questionCard.innerText = questions[Math.floor(Math.random() * questions.length)];
      cardArea.innerHTML = "";
      cardArea.appendChild(questionCard);

      gsap.from(questionCard, { duration: 0.8, opacity: 0, scale: 0.3, ease: "bounce" });

      // კარტზე დაჭერისას უკან დაბრუნება
      questionCard.addEventListener("click", () => {
          gsap.to(questionCard, {
              duration: 0.5,
              scale: 0.5,
              opacity: 0,
              onComplete: resetCards
          });
      });

  }, 800);
});

// თამაშის ხელახლა დაწყება
function resetCards() {
  cardArea.innerHTML = "";
  for (let i = 0; i < numCards; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      card.style.top = `${Math.random() * 60}px`;
      card.style.left = `${Math.random() * 70}%`;
      cardArea.appendChild(card);
  }

  gsap.to(".card", {
      duration: 1.5,
      y: () => Math.random() * 100 - 50,
      x: () => Math.random() * 100 - 50,
      rotation: () => Math.random() * 30 - 15,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
  });
}
